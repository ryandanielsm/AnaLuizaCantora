document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // adiciona a animação
        observer.unobserve(entry.target); // para de observar depois de aparecer
      }
    });
  }, { threshold: 0.1 }); // 10% visível para ativar

  reveals.forEach(reveal => observer.observe(reveal));
});

