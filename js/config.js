document.querySelector('.form_config_refresh').addEventListener('submit', function(event) {
  event.preventDefault();
  var refresh = document.querySelector('input[name="refresh"]').value;
  localStorage.setItem('refresh', refresh);
  window.location.href = '../index.html';
});

document.querySelector('.form_config_decimal').addEventListener('submit', function(event) {
  event.preventDefault();
  var decimal = document.querySelector('input[name="decimal"]').value;
  localStorage.setItem('decimal', decimal);console.log('Decimal:', decimal);
  window.location.href = '../index.html';
});

document.getElementById('refresh_display_txt').textContent = 'O tempo de atualização está a ' + localStorage.getItem('refresh') + ' segundos';
document.getElementById('decimal_display_txt').textContent = 'Estão a ser usadas ' + 
  localStorage.getItem('decimal') + ' casas decimais';
