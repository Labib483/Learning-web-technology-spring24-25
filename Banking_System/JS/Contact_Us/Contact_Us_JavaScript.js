document.querySelector('.submit-btn').addEventListener('click', function() {
  const inquiry = document.getElementById('inquiry').value.trim();
  if (inquiry === "") {
    alert("Please enter your inquiry.");
  } else {
    alert("Your inquiry has been submitted. Thank you!");
    // Here, you could add logic to send the data to a server
  }
});
 
document.querySelector('.cancel-btn').addEventListener('click', function() {
  document.getElementById('inquiry').value = '';
});