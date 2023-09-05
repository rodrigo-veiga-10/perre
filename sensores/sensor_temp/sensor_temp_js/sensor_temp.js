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
function showChanges() {
  const versionSelect = document.getElementById("versionSelect");
  const selectedVersion = versionSelect.value;
  const changes = getChangesForVersion(selectedVersion);
  const changesElement = document.getElementById("changes");
  changesElement.textContent = `${changes}`;
}

function getChangesForVersion(version) {
  const changesMap = {
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
  return changesMap[version] || "Nenhuma informação encontrada para essa versão.";
}