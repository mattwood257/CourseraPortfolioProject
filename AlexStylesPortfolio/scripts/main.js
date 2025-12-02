// Modal logic
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Contact form confirmation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // Remove old confirmation if exists
    const oldMsg = form.querySelector(".confirmation");
    if (oldMsg) oldMsg.remove();

    // Create new confirmation message
    const confirmation = document.createElement("p");
    confirmation.textContent = "✅ Thank you! Your message has been sent successfully.";
    confirmation.classList.add("confirmation");

    form.appendChild(confirmation);
    form.reset(); // clear the form fields
  });
});