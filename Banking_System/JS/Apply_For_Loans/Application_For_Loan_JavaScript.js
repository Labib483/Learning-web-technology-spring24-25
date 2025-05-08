document.getElementById("loanForm").addEventListener("submit", function (e) {
  if (!this.checkValidity()) {
    alert("Please fill all required fields correctly.");
    e.preventDefault();
  } else {
    alert("Application submitted successfully!");
  }
});
 
function cancelForm() {
  if (confirm("Are you sure you want to cancel the application?")) {
    window.history.back();
  }
}