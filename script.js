function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.85)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default page reload

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/lachireddysrishanmukh@gmail.com", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        messageBox.textContent = "Message sent successfully!";
        form.reset();
      } else {
        messageBox.textContent = "Oops! Something went wrong.";
        messageBox.style.color = "red";
      }
    })
    .catch(error => {
      messageBox.textContent = "Error sending message.";
      messageBox.style.color = "red";
    });
  });
});




