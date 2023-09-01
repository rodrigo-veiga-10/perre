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


function showChanges() {
  const versionSelect = document.getElementById("versionSelect");
  const selectedVersion = versionSelect.value;
  const changes = getChangesForVersion(selectedVersion);
  const changesElement = document.getElementById("changes");
  changesElement.textContent = `${changes}`;
}

function getChangesForVersion(version) {
  const changesMap = {
    "0.2.10": "Podes selecionar a versão e ver o que aconteceu nessa versão",
    "0.2.9": "Navbar na parte de baixo do website",
    "0.2.8": "Nova página FAQ",
    "0.2.7": "Aparece o teu nome no dasboard",
    "0.2.6": "Novo estilo do site",
    "0.2.5": "Informações na página Server",
    "0.2.4": "Melhorias na função de busca de temperatura no servidor",
    "0.2.3": "Novo pop-up da versão, o pop-up que tu estás a usar agora",
    "0.2.2": "Remoção da animação do dasboard",
    "0.2.1": "Configuração das casas decimais",
    "0.2": "Primeira configuração - configuração do tempo de atualização da temperatura",
    "0.1.1": "Mudanças internas do website",
    "0.1": "Primeira versão do site",
  };
  return changesMap[version] || "Nenhuma informação encontrada para essa versão.";
}
  