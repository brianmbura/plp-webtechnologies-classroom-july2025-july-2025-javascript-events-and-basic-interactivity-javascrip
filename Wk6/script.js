// ----------------------------
// Part 1: Event Handling
// ----------------------------

// Toggle car details
const viewButtons = document.querySelectorAll(".viewDetails");
viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const details = btn.nextElementSibling;
    details.style.display = (details.style.display === "block") ? "none" : "block";
  });
});

// ----------------------------
// Part 2: Interactive Elements
// ----------------------------

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// ----------------------------
// Part 3: Booking Form Validation
// ----------------------------
const form = document.getElementById("rentalForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Phone
  const phone = document.getElementById("phone").value.trim();
  const phoneRegex = /^(\+254|0)7\d{8}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter a valid Kenyan phone number.";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Car selection
  const car = document.getElementById("carSelect").value;
  if (car === "") {
    document.getElementById("carError").textContent = "Please select a car.";
    valid = false;
  } else {
    document.getElementById("carError").textContent = "";
  }

  // Dates
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  if (!start) {
    document.getElementById("startError").textContent = "Start date required.";
    valid = false;
  } else {
    document.getElementById("startError").textContent = "";
  }
  if (!end || end <= start) {
    document.getElementById("endError").textContent = "End date must be after start date.";
    valid = false;
  } else {
    document.getElementById("endError").textContent = "";
  }

  // Success
  const successMsg = document.getElementById("successMsg");
  if (valid) {
    successMsg.textContent = "🎉 Booking submitted successfully!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
