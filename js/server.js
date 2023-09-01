document.addEventListener('DOMContentLoaded', function() {
    const ip = localStorage.getItem('ip');
    const port = localStorage.getItem('porta');
    const hasError = localStorage.getItem('hasError') === 'true';

    document.getElementById('ip_server').innerHTML = `<h2>IP do servidor:</h2><p>${ip}</p>`;
    document.getElementById('port_server').innerHTML = `<h2>Porta do servidor:</h2><p>${port}</p>`;

    if (hasError) {
        document.getElementById('status_server').innerHTML = `<h2>Estado do servidor:</h2><p style="color: red;">O servidor está a dormir a sesta</p>`;
    } else {
        document.getElementById('status_server').innerHTML = `<h2>Estado do servidor:</h2><p style="color: green;">O servidor está a funcionar</p>`;
    }
});

function open_dialog_server() {
    var dialog = document.getElementById('dialog_server_info');
    dialog.showModal();
}
function close_dialog_server() {
    var dialog = document.getElementById('dialog_server_info');
    dialog.close();
}

