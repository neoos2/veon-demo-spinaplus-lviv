// Real client data only (veon/client.json, research texts). No other numbers belong here.
// Binds short Ukrainian prepositions/conjunctions and dashes to the neighbouring word (no hanging lines).
export const nb = (text: string): string =>
  text.replace(/(?<=^|[\s\u00a0(«])(з|із|зі|у|в|і|й|та|на|до|за|від|без|по|для|о|а|не|або|про|під|над)\s+/giu, "$1\u00a0").replace(/\s+—/g, "\u00a0—");

export const phone = { label: "063 215 23 21", href: "tel:+380632152321" };
export const viber = "viber://chat?number=380632152321";
export const telegram = "https://t.me/spinaplus";
export const address = "вул. Стрийська, 45, ТОЦ «Fabrik»";
export const hours = "8:00–20:00, неділя вихідний";
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Львів, вул. Стрийська, 45")}`;
export const email = "info@spinaplus.com";
export const socials = [
  { name: "YouTube", href: "https://www.youtube.com/@Spina_plus" },
  { name: "Facebook", href: "https://www.facebook.com/spinaplus" },
  { name: "TikTok", href: "https://www.tiktok.com/@spina_plus" },
];
export const nav = [
  { href: "#conditions", label: "З чим приходять" },
  { href: "#first-visit", label: "Перший візит" },
  { href: "#method", label: "Як це працює" },
  { href: "#prices", label: "Ціни" },
  { href: "#contacts", label: "Контакти" },
];
export const futureNote = "Розділ у розробці";
export const zones = [
  { id: "spine", name: "Хребет", items: ["протрузія", "грижа міжхребцевого диска", "сколіоз", "гіперлордоз", "кіфоз грудного відділу", "остеохондроз", "біль у спині", "біль між лопатками", "міжреберна невралгія"] },
  { id: "neck", name: "Шия", items: ["біль у шиї", "синдром хребтової артерії"] },
  { id: "joints", name: "Суглоби та стопи", items: ["артроз колінного суглобу", "біль у коліні", "коксартроз", "синовіт", "біль у плечах", "плоскостопість", "п’яткова шпора"] },
  { id: "nerves", name: "Нерви", items: ["оніміння кінцівок", "ішіас"] },
  { id: "recovery", name: "Відновлення та інше", extra: "Післяопераційне відновлення: видалення гриж хребта, ендопротезування, пластика зв’язок і сухожиль.", items: ["реабілітація після травм", "реабілітація при вагітності", "хронічна втома", "зайва вага та її наслідки", "артеріальна гіпертензія"] },
];
export const firstVisit = [
  "Аналіз історії хвороби, висновків лікарів, рентгену та МРТ",
  "Огляд і пальпаторна діагностика",
  "Тестове виконання спеціальних вправ",
  "Пробне заняття в залі кінезіотерапії",
  "Орієнтовні терміни занять",
  "Індивідуальна програма вправ",
];
export const roles = [
  { name: "Вертебролог", text: "оцінює стан, вивчає знімки МРТ і КТ" },
  { name: "Кінезіотерапевт", text: "веде заняття, стежить за виконанням вправ" },
  { name: "Реабілітолог", text: "дозує навантаження під вашу мету" },
  { name: "Мануальний терапевт", text: "працює із суглобами, зв’язками та фасціями" },
];
export const packages = [
  { n: 24, unit: "заняття", price: "21 000 грн" },
  { n: 36, unit: "занять", price: "29 000 грн" },
  { n: 48, unit: "занять", price: "37 000 грн" },
  { n: 60, unit: "занять", price: "45 000 грн" },
  { n: 72, unit: "заняття", price: "53 000 грн" },
];
