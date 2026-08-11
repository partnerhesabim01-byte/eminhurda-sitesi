// Emin Hurda — site scripti
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".menu-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });
  }

  document.querySelectorAll(".nav-dropdown > span").forEach(function (span) {
    span.addEventListener("click", function () {
      if (window.innerWidth > 760) return;
      span.parentElement.classList.toggle("open");
    });
  });

  // WhatsApp hızlı teklif formu -> wa.me linkine yönlendirir
  var quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("q-name").value.trim();
      var district = document.getElementById("q-district")
        ? document.getElementById("q-district").value
        : "";
      var material = document.getElementById("q-material").value.trim();
      var note = document.getElementById("q-note").value.trim();

      var lines = [
        "Merhaba, Emin Hurda web sitesinden yazıyorum.",
        name ? "Ad Soyad: " + name : "",
        district ? "Bölge: " + district : "",
        material ? "Hurda türü: " + material : "",
        note ? "Not: " + note : ""
      ].filter(Boolean);

      var text = encodeURIComponent(lines.join("\n"));
      window.open("https://wa.me/905510310851?text=" + text, "_blank");
    });
  }

  // SSS akordeon
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  // Basit yıl bilgisi
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
