document.getElementById('loginForm').addEventListener('input', validateLoginForm);
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateLoginForm()) {
    document.getElementById('successMessage').style.display = 'block';
  }
});
 
function validateLoginForm() {
  let isValid = true;
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = email.nextElementSibling;
  const passError = password.nextElementSibling;
 
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
 
  document.getElementById('successMessage').style.display = isValid ? 'block' : 'none';
  return isValid;
}