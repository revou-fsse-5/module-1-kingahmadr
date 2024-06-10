// script.js
document.addEventListener('DOMContentLoaded', function() {
    const volumeButton = document.getElementById('b_vol_control');
    const volumeSliderContainer = document.getElementById('top_volume_slider');
    const volumeSlider = document.getElementById('top_volume_control');

    volumeButton.addEventListener('click', function() {
        if (volumeSliderContainer.style.display === 'none' || volumeSliderContainer.style.display === '') {
            volumeSliderContainer.style.display = 'block';
        } else {
            volumeSliderContainer.style.display = 'none';
        }
    });

    volumeSlider.addEventListener('input', function() {
        console.log('Volume:', volumeSlider.value);
    });
});
