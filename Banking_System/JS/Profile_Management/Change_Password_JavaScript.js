document.getElementById('passwordForm').addEventListener('submit', function(e) {
  e.preventDefault();
 
  const oldPwd = document.getElementById('oldPassword').value;
  const newPwd = document.getElementById('newPassword').value;
  const confirmPwd = document.getElementById('confirmPassword').value;
 
  if (newPwd !== confirmPwd) {
    alert('New passwords do not match!');
    return;
  }
 
  // Proceed with password change logic
  alert('Password changed successfully!');
});

document.getElementById('CancelButton').addEventListener('click', function () {
  window.location.href = 'User_Profile_Edit.html';
});