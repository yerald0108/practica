// notifications.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('task_created')) {
        Toastify({
            text: "Tarea creada exitosamente",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
            stopOnFocus: true
        }).showToast();
    }

    if (urlParams.has('task_updated')) {
        Toastify({
            text: "Tarea actualizada con éxito",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

    if (urlParams.has('task_completed')) {
        Toastify({
            text: "Tarea completada con éxito",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

    if (urlParams.has('task_deleted')) {
        Toastify({
            text: "Tarea eliminada con éxito",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            }
        }).showToast();
    }
});
