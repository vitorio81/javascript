function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var msg2 = window.document.getElementById('smg2')
msg.innerHTML =`Agora são ${hora} horas.`
if ( hora>= 0 && hora <= 12) {
        //msg2.innerHTML='BOM DIA!'
        img.src = 'manhã.jpg'
        document.body.style.background = '#F0D4BF'

    } else if (hora >= 13 && hora <= 18) {
       // msg2.innerHTML = 'BOA TARDE!'
        img.src ='Tarde.jpg'
        document.body.style.background = '#D9925E'

    } else {
       // msg2.innerHTML = 'BOA NOITE!'
        img.src = 'Noite.jpg'
        document.body.style.background = '#003032'
    }
}

