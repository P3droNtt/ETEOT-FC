function playVideo() {
    let video = document.getElementById('video');
    let texto_btn_video = document.getElementById('texto_btn_play_video');

    if (video.paused) {
        video.play();
        texto_btn_video.innerHTML = 'Stop'
    } else {
        video.pause();
        texto_btn_video.innerHTML = 'Iniciar'
    }
}

function volumeVideo() {
    let video = document.getElementById('video');
    let texto_btn_video = document.getElementById('texto_btn_volume_video');

    if (video.volume == false) {
        video.volume = true
        texto_btn_video.innerHTML = 'Mutar'
        texto_btn_video.style.fontSize = '26px'
    } else {
        video.volume = false
        texto_btn_video.innerHTML = 'Desmutar'
        texto_btn_video.style.fontSize = '20px'
    }
}