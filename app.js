// Archivo JavaScript para la lógica de la aplicación

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón y el contenedor de resultados
    const voiceCommandBtn = document.getElementById('voiceCommandBtn');
    const resultContainer = document.getElementById('resultContainer');

    // Verificar si el navegador es compatible con el reconocimiento de voz
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();

        // Configurar el reconocimiento de voz
        recognition.continuous = false;
        recognition.interimResults = true;
        // Configurar el idioma de voz
        recognition.lang = 'es-ES';

        // Evento al iniciar el reconocimiento de voz
        voiceCommandBtn.addEventListener('click', function () {
            recognition.start();
        });

        // Evento al recibir resultados del reconocimiento de voz
        recognition.onresult = function (event) {
            const result = event.results[0][0].transcript;
            resultContainer.innerHTML = `<p>Orden identificada: ${result}</p>`;
        };

        // Evento en caso de error en el reconocimiento de voz
        recognition.onerror = function (event) {
            resultContainer.innerHTML = '<p>Error en el reconocimiento de voz. Inténtalo de nuevo.</p>';
        };
    } else {
        // Mensaje para navegadores que no soportan el reconocimiento de voz
        resultContainer.innerHTML = '<p>Lo siento, tu navegador no soporta el reconocimiento de voz.</p>';
    }
});
