document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar la barra de navegación');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar la barra de navegación:', error);
        });
});
