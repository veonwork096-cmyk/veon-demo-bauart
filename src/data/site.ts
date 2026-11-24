// All facts come from veon/client.json and the client's own homepage (UA). Nothing here is invented.
export const PHONE_MAIN = { e164: "+380951303030", short: "095 130 30 30", full: "+380 95 130 30 30" };
export const PHONE_SECOND = { e164: "+380977505011", short: "097 750 50 11", full: "+380 97 750 50 11" };
export const EMAIL = "ba41114179@ukr.net";
export const ADDRESS = { short: "Вишгород, вул. Промислова, 5", full: "Київська область, м. Вишгород, вул. Промислова, 5" };
export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Вишгород, вулиця Промислова, 5, Київська область");

export const tel = (e164: string) => `tel:${e164}`;
export const viberUrl = `viber://chat?number=${encodeURIComponent(PHONE_MAIN.e164)}`;
export const telegramUrl = `https://t.me/${PHONE_MAIN.e164}`;
export const whatsappUrl = (text?: string) =>
  `https://wa.me/${PHONE_MAIN.e164.slice(1)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const FUTURE_NOTE = "Розділ у розробці";

export const NAV = [
  { href: "#materialy", label: "Щебінь і пісок" },
  { href: "#dostavka", label: "Доставка і самоскиди" },
  { href: "#reklama", label: "Білборди" },
  { href: "#kontakty", label: "Контакти" },
];

/** Billboards from the client's UA homepage (20 places, prices as published, period not stated). */
export const BILLBOARD_GROUPS = [
  { code: "Р69", road: "Київ — Вишгород — Десна — Чернігів", place: "від км 28+910 до км 32+520, біля Хотянівки", count: 7, price: "2000 грн" },
  { code: "Вишгород", road: "перехрестя вул. Набережна і вул. Шолуденка", place: "", count: 2, price: "2000 грн" },
  { code: "Р-02", road: "Київ — Іванків — Овруч", place: "Нові Петрівці, вул. Свято-Покровська", count: 3, price: "2000 грн" },
  { code: "Князя Святослава", road: "вулиця між Лютежем, Новими і Старими Петрівцями", place: "", count: 4, price: "1600 грн" },
  { code: "М-07", road: "Київ — Ковель", place: "від км 37+600 до км 39+600, Бородянський район", count: 4, price: "1600 грн" },
] as const;
