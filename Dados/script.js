document.getElementById('tirarBtn').addEventListener('click', function() {
    for(let i=1; i<=5; i++){
        var numeroAleatorio = Math.floor(Math.random() * 6 ) + 1;
        var numeroDelDado = "imagenes/cara"+numeroAleatorio+".jpg";
        var claseImg = ".img" + i;
        document.querySelector(claseImg + " img").setAttribute('src',numeroDelDado);
        document.querySelector(claseImg + " img").style.display = "block";
    }
});