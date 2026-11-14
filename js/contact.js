console.log("contact.js を読み込みました");
document.addEventListener("wpcf7invalid", function () {
  window.location.href = contactUrls.error;
});

document.addEventListener("wpcf7mailsent", function () {
  window.location.href = contactUrls.thanks;
});
function initErrorSelects() {
  document.querySelectorAll(".error-select").forEach((select) => {
    const trigger = select.querySelector(".error-select__trigger");
    const options = select.querySelector(".error-select__options");
    const valueText = trigger.querySelector("span");
    const input = select.querySelector('input[type="hidden"]');
    const buttons = [...options.querySelectorAll("button")];

    function closeOptions(returnFocus = false) {
      options.hidden = true;
      trigger.setAttribute("aria-expanded", "false");

      if (returnFocus) trigger.focus();
    }

    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";

      options.hidden = open;
      trigger.setAttribute("aria-expanded", String(!open));
    });

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        input.value = button.dataset.value;
        valueText.textContent = button.textContent.trim();
        closeOptions(true);
      });
    });

    select.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeOptions(true);
        return;
      }

      if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;

      event.preventDefault();
      options.hidden = false;
      trigger.setAttribute("aria-expanded", "true");

      const current = buttons.indexOf(document.activeElement);
      const next = event.key === "ArrowDown" ? (current + 1) % buttons.length : current <= 0 ? buttons.length - 1 : current - 1;

      buttons[next].focus();
    });

    document.addEventListener("click", (event) => {
      if (!select.contains(event.target)) closeOptions();
    });

    select.addEventListener("focusout", (event) => {
      if (!select.contains(event.relatedTarget)) closeOptions();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initErrorSelects);
} else {
  initErrorSelects();
}
