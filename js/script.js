const CONTACTS = {
  phone: "+38 (075) 906-67-72",
  phoneHref: "tel:+380759066772",
  telegram: "https://t.me/hub_warehouse",
};

document.querySelectorAll("[id^='contact-phone'], #header-phone").forEach((el) => {
  if (el.tagName === "A" && el.id === "header-phone") {
    el.textContent = CONTACTS.phone;
    el.href = CONTACTS.phoneHref;
  }
});

const phoneBtn = document.getElementById("contact-phone");
if (phoneBtn) {
  phoneBtn.textContent = `Зателефонувати: ${CONTACTS.phone}`;
  phoneBtn.href = CONTACTS.phoneHref;
}

const tgBtn = document.getElementById("contact-telegram");
if (tgBtn) {
  tgBtn.href = CONTACTS.telegram;
}

// --- Mobile nav toggle ---
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});

nav.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
  });
});

// --- Footer year ---
document.getElementById("year").textContent = new Date().getFullYear();
