document.getElementById('signupForm').addEventListener('input', validateForm);
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    document.getElementById('successMessage').style.display = 'block';
  }
});
 
function validateForm() {
  let isValid = true;
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  
  const nameError = fullName.nextElementSibling;
  const emailError = email.nextElementSibling;
  const passError = password.nextElementSibling;
  const confirmPassError = confirmPassword.nextElementSibling;
 
  // Full Name validation
  if (fullName.value.trim() === "") {
nameError.style.display = "block";
    isValid = false;
  } else {
nameError.style.display = "none";
  }
 
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
emailError.style.display = "block";
    isValid = false;
  } else {
emailError.style.display = "none";
  }
 
  // Password validation
  if (password.value.length < 6) {
passError.style.display = "block";
    isValid = false;
  } else {
passError.style.display = "none";
  }
 
  // Confirm password validation
  if (password.value !== confirmPassword.value || confirmPassword.value === "") {
confirmPassError.style.display = "block";
    isValid = false;
  } else {
confirmPassError.style.display = "none";
  }
 
  // Success message hidden if any error
  document.getElementById('successMessage').style.display = isValid ? 'block' : 'none';
  return isValid;
}