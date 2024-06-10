document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('player__audio');
    const playButton = document.getElementById('b-play');
    const pauseButton = document.getElementById('b-pause');
    const muteButton = document.getElementById('b-mute');
    const volumeSlider = document.getElementById('b-slider');

    playButton.addEventListener('click', function () {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    });

    pauseButton.addEventListener('click', function () {
        audio.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    });

    muteButton.addEventListener('click', function () {
        if (audio.muted) {
            audio.muted = false;
            muteButton.textContent = '🔊';
        } else {
            audio.muted = true;
            muteButton.textContent = '🔇';
        }
    });

    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
    });
});