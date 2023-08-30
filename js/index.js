async function fetchTemperature() {
  try {
    const response = await fetch('http://192.168.1.199:5000/temperatura');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const temperatura = data.temperatura.toFixed(localStorage.getItem('decimal'));
    console.log('Temperatura:', temperatura);
    document.querySelector('h1').textContent = 'Temperatura atual: ' + temperatura + ' °C';
  } catch (error) {
    console.error('Erro ao obter temperatura:', error);
    document.querySelector('h1').textContent = 'Erro';
  }
}

const storedRefreshInterval = localStorage.getItem('refresh');
const refreshInterval = storedRefreshInterval ? storedRefreshInterval : 1;

setInterval(fetchTemperature, refreshInterval * 1000);



function openDialog() {
  var dialog = document.getElementById('versao');
  dialog.showModal();
}
function closeDialog() {
  var dialog = document.getElementById('versao');
  dialog.close();
}
  