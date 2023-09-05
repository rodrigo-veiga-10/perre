document.querySelector('.container_sensor').addEventListener('click', function() {
  window.location.href = '/sensores/sensor_temp/sensor_temp_pag/sensor_temp.html';
});

// welcome name
function closeDialog_welcome() {
  var dialog_welcome = document.getElementById('welcome_dialog');
  console.log('Closing welcome dialog...');
  dialog_welcome.close();
}

function changeName() {
  var nameInput = document.getElementById('name_input');
  var welcomeName = document.getElementById('welcome_name');
  if (nameInput.value) {
    localStorage.setItem('name', nameInput.value);
    welcomeName.textContent = "Bem-vindo, " + localStorage.getItem('name');
  }
}
window.addEventListener("load", function() {
  document.getElementById("welcome_name").textContent = "Bem-vindo, " + localStorage.getItem('name');
});

document.addEventListener('DOMContentLoaded', function() {
  const h1_name = document.getElementById('welcome_name');
  if (h1_name) {
    h1_name.addEventListener('click', function() {
      console.log("Opening welcome dialog...");
      try {
        const dialog = document.getElementById('welcome_dialog');
        if (dialog) {
          dialog.showModal();
        }
      } catch (error) {
        console.error("Error displaying the dialog:", error);
      }
    });
  } else {
    console.warn("Element with class 'container_welcome' not found.");
  }
});
// welcome apple
window.addEventListener('load', function() {
  if (localStorage.getItem('promptShown') !== 'true') {
    alert("Bem vindo ao Servidor PerreVeiga");
    try {
      localStorage.setItem('name', prompt("Para teres uma melhor experiência no website, por favor, insere o seu nome:"));
      localStorage.setItem('promptShown', 'true');
      alert("Podes sempre mudar o teu nome mais tarde clicando no Bem vindo, o_teu_nome");
    } catch (error) {
      console.error('Error occurred while accessing localStorage:', error);
    }
  }
});