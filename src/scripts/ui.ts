// Small UI behaviours. Everything works without this file: menus are native <details>, anchors are plain links.

// 1. Header: surface + line once the page is scrolled.
const header = document.querySelector<HTMLElement>("[data-header]");
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// 2. Mobile menu: full-screen panel with the 4 anchors; closes after a choice, on Esc; focus returns to the burger.
const menu = document.querySelector<HTMLElement>("[data-menu]");
const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
const closeBtn = document.querySelector<HTMLButtonElement>("[data-menu-close]");
if (menu && openBtn && closeBtn) {
  const setOpen = (open: boolean, restoreFocus = true) => {
    menu.hidden = !open;
    menu.classList.toggle("is-open", open);
    openBtn.setAttribute("aria-expanded", String(open));
    document.documentElement.classList.toggle("menu-open", open);
    if (open) closeBtn.focus();
    else if (restoreFocus) openBtn.focus();
  };
  openBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));
  menu.querySelectorAll("[data-menu-link]").forEach((a) => a.addEventListener("click", () => setOpen(false, false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) setOpen(false);
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (m) => { if (m.matches && !menu.hidden) setOpen(false, false); });
}

// 3. Contact choosers (<details data-cmenu>): one open at a time, Esc and click outside close, focus returns.
const menus = Array.from(document.querySelectorAll<HTMLDetailsElement>("[data-cmenu]"));
const closeMenu = (d: HTMLDetailsElement, focus: boolean) => {
  if (!d.open) return;
  d.open = false;
  if (focus) d.querySelector<HTMLElement>("summary")?.focus();
};
menus.forEach((d) => {
  d.addEventListener("toggle", () => {
    if (d.open) menus.forEach((o) => { if (o !== d) o.open = false; });
  });
});
document.addEventListener("click", (e) => {
  const t = e.target as Node;
  menus.forEach((d) => { if (d.open && !d.contains(t)) closeMenu(d, false); });
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  menus.forEach((d) => { if (d.open) closeMenu(d, true); });
});
