function showSection(sectionId) {
  document.querySelectorAll(".panel-section").forEach(section => {
section.style.display = section.id === sectionId ? "block" : "none";
  });
}
 
function filterUsers() {
  const input = document.getElementById("searchUser").value.toLowerCase();
  const rows = document.querySelectorAll("#userTable tr");
  rows.forEach(row => {
    const name = row.children[1].textContent.toLowerCase();
    const email = row.children[2].textContent.toLowerCase();
row.style.display = name.includes(input) || email.includes(input) ? "" : "none";
  });
}
 

function bulkDelete() {
  const checkboxes = document.querySelectorAll("#userTable input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (cb.checked) cb.closest("tr").remove();
  });
}

