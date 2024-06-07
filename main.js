function toggleAudio() {
    var audio = document.getElementById('myAudio');
    var button = document.querySelector('.floating-button');
    if (audio.paused) {
        audio.play();
        button.textContent = '❚❚'; // Change button text to pause icon
    } else {
        audio.pause();
        button.textContent = '▶'; // Change button text to play icon
    }
}