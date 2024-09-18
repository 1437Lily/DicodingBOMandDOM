window.onload = function() {
    const gambar = document.getElementById('gambar');
    gambar.onclick = function(){
        const lebarGambar = gambar.getAttribute('width');
        if (lebarGambar == 150){
        gambar.setAttribute('width', 300);
        gambar.setAttribute('height', 215);
        }
        else {
            gambar.setAttribute('width', 150);
            gambar.setAttribute('height', 100);
        }
    }
    const button = document.querySelectorAll('.button');
    const playButton = button[3];
    const playButtonElement = playButton.children[0];
    playButtonElement.setAttribute('type','submit');
    const links = document.getElementById('links');
    const dicodingLink = document.getElementById('dicodingLink');
    dicodingLink.onmouseover = function(){
        dicodingLink.innerText = 'Tempat Belajar Asiky :)';
    }
    dicodingLink.onmouseout = function(){
        dicodingLink.innerText = 'Dicoding'
    }
    const googleLink = document.getElementById('googleLink');
    googleLink.onmouseover = function(){
        googleLink.innerHTML = '<a href="http://www.google.com" id="googleLink"><b><i>Mysterious</i></b></a>';
    }
    googleLink.onmouseout = function(){
        googleLink.innerHTML = 'Google'
    };
    const buttonsi = document.getElementsByClassName('button');
    for(const a of buttonsi){
        a.children[0].style.borderRadius = '6px'
    }

};


