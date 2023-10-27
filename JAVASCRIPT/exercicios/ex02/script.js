function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

        if (fano.value.length == 0 || fano.value > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente')

        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            res.innerHTML = `Idade Calculada: ${idade}`
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')


            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'imagens/bebemenino.png')
                    document.body.style.background = '#97c4c7'

                } else if (idade < 21) {
                    // jovem
                    img.setAttribute('src', 'imagens/menino.png')
                    document.body.style.background = '#923d1e'
                    
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'imagens/homem.png')
                    document.body.style.background = '#fdc156'
                } else {
                    //idoso
                    img.setAttribute('src', 'imagens/idoso.png')
                    document.body.style.background = '#342134'
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'imagens/bebemenina.png')
                    document.body.style.background = '#f6b6bd'
                } else if (idade < 21) {
                    // jovem
                    img.setAttribute('src', 'imagens/menina.png')
                    document.body.style.background = '#03080c'
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'imagens/mulher.png')
                    document.body.style.background = '#251b24'
                } else {
                    //idoso
                    img.setAttribute('src', 'imagens/idosa.png')
                    document.body.style.background = '#c5be70'
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }


}