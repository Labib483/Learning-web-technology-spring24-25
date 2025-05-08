function previewImage(input, targetId) {
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById(targetId).src = e.target.result;
  };
  if (file) reader.readAsDataURL(file);
}
 
function simulateDetection() {
  // Simulate detection of account and amount
  document.getElementById("accountNumber").value = "1234567890";
  document.getElementById("amount").value = "1500.00";
}
 
document.getElementById("depositForm").addEventListener("submit", function(event) {
  event.preventDefault();
 
  // Display confirmation and image previews
  document.getElementById("frontResult").src = document.getElementById("frontPreview").src;
  document.getElementById("backResult").src = document.getElementById("backPreview").src;
  document.getElementById("confirmation").style.display = "block";
});