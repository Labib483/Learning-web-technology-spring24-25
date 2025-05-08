document.getElementById('DP_Button').addEventListener('click', function () {
  document.getElementById('UserPicture').click();
});
 
document.getElementById('UserPicture').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
alert("Selected file: " + file.name);
    // You can add preview logic here if needed
  }
});

document.getElementById('UserName_Button').addEventListener('click', function() {
  alert('Span clicked!');
});
document.getElementById('Cng_Pass_Button').addEventListener('click', function() {
  alert('Span clicked!');
});

document.getElementById('mySettingTab').addEventListener('click', function(event) {
  event.preventDefault(); // prevent any action
  event.stopPropagation(); // stop further event bubbling
  
});

document.getElementById('myProfileTab').addEventListener('click', function () {
  window.location.href = '../View_Profile/MyProfile.html';
});

 /*
// Select all span elements
const spans = document.querySelectorAll('span');

document.getElementById('mySettingTab').addEventListener('click', function() {
this.style.display = 'none';
});
*/