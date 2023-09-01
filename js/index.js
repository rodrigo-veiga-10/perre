async function fetchTemperature() {
  localStorage.setItem('ip', "192.168.1.199");
  localStorage.setItem("porta", 5000);

  try {
    console.log('Fetching temperature...');
    const response = await fetch('http://' + localStorage.getItem('ip') + ':' + localStorage.getItem('porta') + '/temperatura');
    if (!response.ok) {
      localStorage.setItem('hasError', true);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const temperatura = data.temperatura.toFixed(localStorage.getItem('decimal'));
    console.log('Temperatura:', temperatura);
    document.querySelector('.dashboard').textContent = 'Temperatura atual: ' + temperatura + ' °C';
  } catch (error) {
    console.error("Erro ao obter temperatura");
    localStorage.setItem('hasError', true);
    document.querySelector('.dashboard').textContent = 'Erro';
  }
}

const storedRefreshInterval = localStorage.getItem('refresh');
const refreshInterval = storedRefreshInterval ? storedRefreshInterval : 1;

setInterval(fetchTemperature, refreshInterval * 1000);

function openDialog() {
  var dialog = document.getElementById('versao');
  console.log('Opening dialog...');
  dialog.showModal();
}

function closeDialog() {
  var dialog = document.getElementById('versao');
  console.log('Closing dialog...');
  dialog.close();
}

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

  