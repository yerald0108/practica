document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault(); 
        
        Swal.fire({
            title: "¿Estas seguro?",
            icon: "question",
            html: `¿Deseas cerrar sesión realmente?`,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `Si`,
            cancelButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/logout';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Detectar si los parámetros 'logout_success', 'login_success' o 'signup_success' están en la URL
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('logout_success')) {
        Swal.fire({
            html: 'Sesión cerrada con éxito',
            icon: 'success',
            confirmButtonText: 'Acepto',
            padding: '1rem',
            backdrop: true,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'bottom-end',
            allowOutsideClick: false,
            allowEscapeKey: false,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            showCancelButton: false,
            showCloseButton: false,
            closeButtonAriaLabel: 'Cerrar esta alerta',
        }).then(() => {
            // Eliminar el parámetro 'logout_success' de la URL
            const newUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        });
    }

    if (urlParams.has('login_success')) {
        Swal.fire({
            html: 'Usuario autenticado con éxito',
            icon: 'success',
            confirmButtonText: 'Acepto',
            padding: '1rem',
            backdrop: true,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'bottom-end',
            allowOutsideClick: false,
            allowEscapeKey: false,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            showCancelButton: false,
            showCloseButton: false,
            closeButtonAriaLabel: 'Cerrar esta alerta',
        }).then(() => {
            // Eliminar el parámetro 'login_success' de la URL
            const newUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        });
    }

    if (urlParams.has('signup_success')) {
        Swal.fire({
            html: 'Cuenta creada con éxito',
            icon: 'success',
            confirmButtonText: 'Acepto',
            padding: '1rem',
            backdrop: true,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'bottom-end',
            allowOutsideClick: false,
            allowEscapeKey: false,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            showCancelButton: false,
            showCloseButton: false,
            closeButtonAriaLabel: 'Cerrar esta alerta',
        }).then(() => {
            // Eliminar el parámetro 'signup_success' de la URL
            const newUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        });
    }
});
