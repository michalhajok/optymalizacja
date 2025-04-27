// Prosty komunikat w konsoli
console.log("Strona została załadowana poprawnie!");

// Przykład dodania działania po kliknięciu
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Przekierowanie zostało zatrzymane. Tutaj można dodać obsługę linków."
      );
    });
  });
});
