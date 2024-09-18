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


};


