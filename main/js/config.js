const checkbox = document.getElementById("checkbox_dev");
const localStorage = window.localStorage;

checkbox.addEventListener("change", handleCheckboxChange);

// Check the checkbox based on the stored value
checkbox.checked = localStorage.getItem("mode_dev") === "true";

function handleCheckboxChange() {
  localStorage.setItem("mode_dev", checkbox.checked ? "true" : "false");
}