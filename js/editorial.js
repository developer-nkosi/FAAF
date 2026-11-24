(() => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const closeMenu = () => {
    nav?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-label", "Open navigation");
  };
  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  nav?.querySelectorAll("a").forEach((link) => {
    if (
      new URL(link.href).pathname.replace(/index\.html$/, "") === location.pathname.replace(/index\.html$/, "") &&
      !new URL(link.href).hash
    )
      link.setAttribute("aria-current", "page");
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu?.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  matchMedia("(min-width: 1051px)").addEventListener("change", closeMenu);
  document.querySelectorAll("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-filter]")
        .forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
      let count = 0;
      document.querySelectorAll("[data-category]").forEach((card) => {
        card.hidden =
          button.dataset.filter !== "all" &&
          card.dataset.category !== button.dataset.filter;
        if (!card.hidden) count++;
      });
      document.querySelector(".program-invitation").hidden =
        button.dataset.filter !== "all";
      document.querySelector("#filter-status").textContent =
        `${count} ${count === 1 ? "program" : "programs"} shown`;
    }),
  );
  const dialog = document.querySelector("#involve-dialog");
  const form = document.querySelector("#involve-form");
  const amount = document.querySelector("#amount");
  let mode = "donate",
    program = "",
    opener;
  document.querySelectorAll("[data-modal]").forEach((button) =>
    button.addEventListener("click", () => {
      opener = button;
      mode = button.dataset.modal;
      program = button.dataset.program || "";
      closeMenu();
      document.querySelector("#donation-fields").hidden = mode !== "donate";
      document.querySelector("#volunteer-fields").hidden = mode === "donate";
      amount.disabled = mode !== "donate";
      document.querySelector("#dialog-title").textContent =
        mode === "donate"
          ? "Invest in possibility."
          : "Your skills can change a life.";
      document.querySelector("#dialog-description").textContent =
        mode === "donate"
          ? `Discuss a contribution${program ? ` towards ${program.toLowerCase()}` : ""} with our team.`
          : "Tell us how you would like to be part of FAAF.";
      document.querySelector("#form-status").textContent = "";
      dialog.showModal();
    }),
  );
  dialog
    ?.querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom)
    )
      dialog.close();
  });
  dialog?.addEventListener("close", () => {
    if (opener?.getClientRects().length) opener.focus();
    else menu?.focus();
  });
  const syncAmount = () =>
    document
      .querySelectorAll("[data-amount]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.amount === amount.value),
        ),
      );
  document.querySelectorAll("[data-amount]").forEach((button) =>
    button.addEventListener("click", () => {
      amount.value = button.dataset.amount;
      syncAmount();
    }),
  );
  amount?.addEventListener("input", syncAmount);
  const email = (subject, body) => {
    location.href = `mailto:fromaidtoability@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#support-name").value.trim();
    const address = document.querySelector("#support-email").value.trim();
    const message = document.querySelector("#support-message").value.trim();
    const intent =
      mode === "donate"
        ? `I would like to discuss a donation of MWK ${amount.value}${program ? ` to support ${program}` : ""}. Please share the available donation methods.`
        : `I would like to: ${document.querySelector("#interest").value.toLowerCase()}.`;
    email(
      mode === "donate" ? "FAAF donation inquiry" : "Get involved with FAAF",
      `Hello FAAF,\n\n${intent}\n\n${message}\n\nName: ${name}\nEmail: ${address}`,
    );
    document.querySelector("#form-status").textContent =
      "Email draft prepared. Complete sending in your email app. If it did not open, email fromaidtoability@gmail.com directly.";
  });
  document
    .querySelector("#newsletter-form")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      email(
        "FAAF community updates request",
        `Hello FAAF,\n\nI would like to receive community news at ${document.querySelector("#newsletter-email").value}.\n\nThank you.`,
      );
    });
})();
