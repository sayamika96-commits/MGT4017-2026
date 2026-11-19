const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const message = document.getElementById("shopMessage");
    message.textContent = `${category} selected — this demo is ready to connect to your food listings.`;
    button.textContent = "✓";
    button.setAttribute("aria-label", `${category} selected`);
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const formMessage = document.getElementById("formMessage");
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }
  formMessage.textContent = "Thanks for your interest! This demo form does not send data yet.";
  emailInput.value = "";
});
