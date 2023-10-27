
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'imagens/manha.png'
        document.body.style.background = '#a09582'
        
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ae440e'
        
    } else {
        //BOA NOITE
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#743c80' 
    }
}
