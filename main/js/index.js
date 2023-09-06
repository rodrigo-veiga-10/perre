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

var nameInput = document.getElementById('name_input');
nameInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    changeName();
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
function showChanges() {
  const versionSelect = document.getElementById("versionSelect");
  const selectedVersion = versionSelect.value;
  const changes = getChangesForVersion(selectedVersion);
  const changesElement = document.getElementById("changes");
  changesElement.textContent = `${changes}`;
}

const changesMap = {
  "3.2_alpha_1" : "Introdução do modo DEV que dá a possibilidade a entrar em sensores EM BREVE",
  "3.1": "MEGA ATUALIZAÇÃO na estrutura do website",
  "3.0": "Website várias funções",
  "0.2.10.2": "Alterações no estilo do site",
  "0.2.10.1": "Navbar de cima fica mesmo colada em cima",
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

function getChangesForVersion(version) {
  return changesMap[version] || "Nenhuma informação encontrada para essa versão.";
}
// portao só é valido se modo dev estiver ativo
const containerSensors = document.querySelectorAll('.container_sensor');
if (containerSensors.length >= 2) {
  containerSensors[1].addEventListener('click', function() {
    if (localStorage.getItem('mode_dev') === 'true') {
      window.location.href = '/sensores/sensor_portao/portao.html';
    }
  });
}