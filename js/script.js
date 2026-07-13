// --- Placeholder contacts: replace when Telegram username and phone are ready ---
const CONTACTS = {
  phone: "+380 (00) 000-00-00",
  phoneHref: "tel:+380000000000",
  telegram: "https://t.me/skladwork_hr",
};

document.querySelectorAll("[id^='contact-phone'], #header-phone").forEach((el) => {
  if (el.tagName === "A" && el.id === "header-phone") {
    el.textContent = CONTACTS.phone;
    el.href = CONTACTS.phoneHref;
  }
});

const phoneBtn = document.getElementById("contact-phone");
if (phoneBtn) {
  phoneBtn.textContent = `Позвонить: ${CONTACTS.phone}`;
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
