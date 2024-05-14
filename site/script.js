// script.js

function toggleButton() {
    var button = document.getElementById('toggleButton');
    if (button.classList.contains('start')) {
        button.classList.remove('start');
        button.classList.add('stop');
        button.innerHTML = 'Stop';
    } else {
        button.classList.remove('stop');
        button.classList.add('start');
        button.innerHTML = 'Start';
    }
}
