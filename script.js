// ==============================
// Part 1: Event Handling Example
// ==============================
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "🎉 Button clicked!";
});

// ==============================
// Part 2: Interactive Features
// ==============================

// Light/Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counter").textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  document.getElementById("counter").textContent = counter;
});

// Collapsible FAQ
document.getElementById("faqQuestion").addEventListener("click", () => {
  let answer = document.getElementById("faqAnswer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
});

// ==============================
// Part 3: Form Validation
// ==============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password Validation (min 6 chars)
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final Check
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
