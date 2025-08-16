document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 150); // Délai pour chaque élément
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1)  translateY(0)";
          }, index * 150); // Délai pour chaque élément
        } else {
          entry.target.style.opacity = "0.5";
          entry.target.style.transform = "scale(0.9) translateY(40px)";
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    card.style.opacity = "0.5";
    card.style.transform = "translateY(40px) scale(0.9)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

// Animation d'apparition des étapes de la méthode
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".method-step");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
        }, index * 150); // Délai pour chaque élément
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  steps.forEach((step) => {
    observer.observe(step);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".reason-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 150); // Délai pour chaque élément 
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  // Apparition fluide au scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 150); // Délai pour chaque élément
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(form);
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".form-group, .contact-info p, .btn-submit, .contact-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = "all 0.6s ease";
            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1) translateY(0)";
          }, index * 150); // Délai pour chaque élément
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "scale(0.90) translateY(15px)";
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(15px) scale(0.90)";
    observer.observe(el);
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Votre message a été envoyé avec succès !");
  this.reset();
});

// Smooth scroll pour les liens d'ancre
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header.navigation");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      navbar.classList.add("menu-white");
    } else {
      navbar.classList.remove("menu-white");
    }
  });
});

// menu burger
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".menu-burger");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header.navigation");
  const links = document.querySelectorAll(".navbar a");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    burger.classList.toggle("active");
    header.classList.toggle("active");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 999) {
      navbar.classList.remove("active");
      burger.classList.remove("active");
      header.classList.remove("active");
    }
  });
  window.addEventListener("scroll", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      burger.classList.remove("active");
      header.classList.remove("active");
    }
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        burger.classList.remove("active");
        header.classList.remove("active");
      }
    });
  });
});
