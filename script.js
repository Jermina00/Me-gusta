// Obtener todos los botones de "Like"
const likeButtons = document.querySelectorAll('.like-btn');

// Para cada botón, agregar un listener de clic
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener el elemento de los me gusta asociado
        const likesElement = button.parentElement.querySelector('.likes');
        // Obtener el número actual de me gusta
        let likes = parseInt(likesElement.textContent);
        // Incrementar el número de me gusta
        likes++;
        likesElement.textContent = likes + " Like(s)";
    });
});
