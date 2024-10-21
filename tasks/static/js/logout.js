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

