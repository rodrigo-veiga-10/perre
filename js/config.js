document.querySelector('.form_config').addEventListener('submit', function(event) {
  event.preventDefault();
  var refresh = document.querySelector('input[name="num"]').value;
  localStorage.setItem('refresh', refresh);
  window.location.href = '../index.html';
});
document.getElementById('refresh_display_txt').textContent = 'O tempo de atualização está a: ' + localStorage.getItem('refresh') + ' segundos';
