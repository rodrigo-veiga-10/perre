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