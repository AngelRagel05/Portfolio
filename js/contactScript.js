document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensajeExito').style.display = 'block';
    this.reset();
});