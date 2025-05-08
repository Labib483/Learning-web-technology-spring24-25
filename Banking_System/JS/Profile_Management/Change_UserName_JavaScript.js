document.getElementById('usernameForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const newUsername = document.getElementById('newUsername').value;
  const confirmUsername = document.getElementById('confirmUsername').value;
 
  if (newUsername === '' || confirmUsername === '') {
    alert('Please fill in all fields.');
  } else if (newUsername !== confirmUsername) {
    alert('Usernames do not match!');
  } else {
    alert('Username successfully updated!');
    // You can add logic here to submit to backend
  }
});
 
document.querySelector('.cancel-btn').addEventListener('click', function() {
  document.getElementById('newUsername').value = '';
  document.getElementById('confirmUsername').value = '';
});

document.getElementById('Cancel_btn').addEventListener('click', function () {
  window.location.href = 'User_Profile_Edit.html';
});