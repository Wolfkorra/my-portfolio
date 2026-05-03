function initPortfolioMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealItems = document.querySelectorAll(
    ".hero-copy, .hero-visual, .subsection-card, .skill-category, .showcase-card, .contact-info, .contact-form"
  );

  revealItems.forEach((el, index) => {
    el.classList.add("reveal");

    if (el.classList.contains("hero-copy")) {
      el.classList.add("fade-left");
    }

    if (el.classList.contains("hero-visual")) {
      el.classList.add("fade-right");
    }

    if (
      el.classList.contains("showcase-card") ||
      el.classList.contains("skill-category")
    ) {
      el.style.transitionDelay = `${(index % 3) * 90}ms`;
    }
  });

  if (!reduceMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }

  const glowItems = document.querySelectorAll(
    ".showcase-card, .subsection-card, .skill-category"
  );

  glowItems.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();

      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolioMotion);
} else {
  initPortfolioMotion();
}
