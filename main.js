// Agregar interactividad al botón de "Aprender Más"
document.getElementById('learn-more').addEventListener('click', function() {
    // Mostrar una alerta cuando el usuario hace clic en el botón
    alert('¡Pronto tendrás más información sobre los especialistas y servicios!');
});

// Esperar a que el contenido de la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario por su ID
    const form = document.getElementById('contact-form');
    // Obtener el mensaje de estado por su ID
    const formMessage = document.getElementById('form-message');

    // Añadir un evento de envío al formulario
    form.addEventListener('submit', function(event) {
        // Prevenir el envío predeterminado del formulario (recarga de la página)
        event.preventDefault();

        // Obtener los valores ingresados en los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validación básica para asegurarse de que los campos correo y mensaje no estén vacíos
        if (!correo || !mensaje) {
            // Mostrar un mensaje de error si faltan campos
            formMessage.textContent = 'Por favor, completa todos los campos requeridos.';
            formMessage.style.color = 'red'; // Cambiar el color del mensaje a rojo
            return; // Salir de la función sin continuar con el proceso
        }

        // Simular el envío del formulario (en un caso real, aquí iría un envío AJAX)
        // Aquí puedes hacer una solicitud para enviar los datos al servidor

        // Mostrar un mensaje de éxito después de "enviar" el formulario
        formMessage.textContent = '¡Tu mensaje ha sido enviado correctamente! Nos pondremos en contacto pronto.';
        formMessage.style.color = 'black'; // Cambiar el color del mensaje a negro

        // Limpiar los campos del formulario después del "envío"
        form.reset();
    });
});
