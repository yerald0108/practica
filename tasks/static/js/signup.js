document.addEventListener('DOMContentLoaded', function() {
    // Detectar si hay un error en la URL
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('password_error')) {
        Swal.fire({
            text: 'Las contraseñas no coinciden',
            icon: 'error',
            title: 'Oops...',
            confirmButtonText: 'Aceptar',
        });
        
        // Eliminar el parámetro de la URL después de mostrar la alerta
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }

    if (urlParams.has('user_exists')) {
        Swal.fire({
            text: 'El usuario ya existe',
            icon: 'error',
            title: 'Oops...',
            confirmButtonText: 'Aceptar',
        });
        
        // Eliminar el parámetro de la URL después de mostrar la alerta
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
});
