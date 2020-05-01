let hints = document.querySelectorAll('button.inDepth-hint');

for (let i = 0; i < hints.length; i++) {
    hints[i].addEventListener('click', showHint);
}

function showHint(e) {
    e.preventDefault();
    for (let i = 0; i < hints.length; i ++) {
        hints[i].classList.remove('open-hint');
        hints[i].classList.add('close-hint');
    }
    if (hints[i].classList.contains('close-hint')) {
        hints[i].classList.remove('close-hint');
        hints[i].classList.add('open-hint');
    }
}