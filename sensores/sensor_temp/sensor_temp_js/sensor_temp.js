async function fetchTemperature() {
  // Set IP address and port number in local storage
  localStorage.setItem('ip', "192.168.1.199");
  localStorage.setItem("porta", 5000);

  try {
    console.log('Fetching temperature...');
    // Fetch temperature data from server using IP address and port number
    const response = await fetch('http://' + localStorage.getItem('ip') + ':' + localStorage.getItem('porta') + '/temperatura');
    if (!response.ok) {
      // Set error flag in local storage and throw error if response is not successful
      localStorage.setItem('hasError', true);
      throw new Error('Network response was not ok');
    }

    // Extract temperature value from response data and format it based on decimal value stored in local storage
    const data = await response.json();
    const temperatura = data.temperatura.toFixed(localStorage.getItem('decimal'));
    console.log('Temperatura:', temperatura);
    // Update temperature display on webpage with formatted temperature value
    document.querySelector('.dashboard').textContent = 'Temperatura atual: ' + temperatura + ' °C';
  } catch (error) {
    console.error("Error fetching temperature:", error.message);
    // Set error flag in local storage and update temperature display on webpage with error message
    localStorage.setItem('hasError', true);
    document.querySelector('.dashboard').textContent = 'Erro';
  }
}

const storedRefreshInterval = localStorage.getItem('refresh');
const refreshInterval = storedRefreshInterval ? storedRefreshInterval : 1;

setInterval(fetchTemperature, refreshInterval * 1000);