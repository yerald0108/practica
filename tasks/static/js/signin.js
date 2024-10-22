// Verificar si hay un mensaje de error en la autenticación
const urlParams = new URLSearchParams(window.location.search);
const errorMessage = urlParams.get('error');

if (errorMessage) {
    // Mostrar el mensaje de error usando SweetAlert
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrecta',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Eliminar el parámetro 'error' de la URL después de mostrar la alerta
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    });
}
