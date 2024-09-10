const progressElement = document.querySelector('.progress');
let width = 0;

const interval = setInterval(() => {
    width += 1;
    progressElement.style.width = width + '%';

    if (width >= 100) {
        clearInterval(interval);
        window.location.href = "#";
    }
}, 50); 

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Impede o menu de contexto padrão de aparecer
});

document.onkeydown = function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }
};