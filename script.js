/* ============================================================
   Back 2 Life Studio — site interactivity
   ============================================================ */
(function () {
  "use strict";

  // ---------- Footer year ----------
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Sticky header shadow on scroll ----------
  var header = document.getElementById("siteHeader");
  var fab = document.querySelector(".fab");
  var lastScroll = 0;

  if (header) {
    var onScroll = function () {
      var y = window.scrollY;

      if (y > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }

      // Hide the FAB when scrolling up significantly (so it doesn't sit on top
      // of the booking buttons when the user has scrolled to that section).
      if (fab) {
        var nearBottom = window.innerHeight + y >= document.body.scrollHeight - 200;
        if (nearBottom) {
          fab.classList.add("is-hidden");
        } else {
          fab.classList.remove("is-hidden");
        }
      }

      lastScroll = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- Mobile nav toggle (with body scroll lock) ----------
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  var body = document.body;

  if (toggle && nav) {
    var lockScroll = function () {
      // Preserve scroll position so closing the menu doesn't jump
      body.dataset.scrollY = String(window.scrollY);
      body.classList.add("is-locked");
    };
    var unlockScroll = function () {
      body.classList.remove("is-locked");
      var y = parseInt(body.dataset.scrollY || "0", 10);
      if (!Number.isNaN(y)) {
        // No-op for now; CSS doesn't actually shift the body so scrollY is preserved
      }
    };

    var closeNav = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      unlockScroll();
    };
    var openNav = function () {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      lockScroll();
    };

    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close nav when a link is tapped on mobile
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth <= 900) {
          closeNav();
        }
      });
    });

    // Close nav on resize past breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && nav.classList.contains("is-open")) {
        closeNav();
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });

    // Close on tap outside (mobile)
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (window.innerWidth > 900) return;
      var headerEl = document.getElementById("siteHeader");
      if (headerEl && !headerEl.contains(e.target)) {
        closeNav();
      }
    });
  }

  // ---------- Reveal-on-scroll using IntersectionObserver ----------
  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            // Stagger slightly for grouped reveals
            var delay = Math.min(i * 60, 240);
            setTimeout(function () {
              entry.target.classList.add("is-visible");
            }, delay);
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback for very old browsers
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // ---------- Smooth-scroll offset for sticky header ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      var headerHeight = header ? header.offsetHeight : 0;
      var rect = target.getBoundingClientRect();
      var top = window.scrollY + rect.top - headerHeight + 1;

      window.scrollTo({ top: top, behavior: "smooth" });

      if (history.pushState) {
        history.pushState(null, "", href);
      }
    });
  });
})();
