document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        
        // Mostrar notificación usando Toastify
        Swal.fire({
            title: "¿Estas seguro?",
            icon: "question",
            html: `¿Deseas cerrar sesión realmente?`,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `Si`,
            cancelButtonText: `No`,
          }).then((result) => {

            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = '/logout'
            }
                
          });
    });
});

// Detectar si el parámetro 'logout_success' o 'login_success' está en la URL
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
        customClass: {
            content: 'content-class'
        }
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
        customClass: {
            content: 'content-class'
        }
    });
}

