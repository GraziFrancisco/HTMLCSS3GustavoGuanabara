function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<strong>Impossível contar. Digite todos os dados. </strong> '
        //alert('[ERRO!] Preencha os dados corretamente!')
     

    } else {
        res.innerHTML = '<strong>Contando:<hr> </strong> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p == 0) {
            p = 1
            alert('[PASSO INVÁLIDO!] Considerando passo = 1!')
        } 

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                
                res.innerHTML += ` ${c} \u{1F5A4} `
            }

        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F5A4} `
            }
            
        }

        res.innerHTML += `<hr><strong>Fim da contagem!</strong>  \u{1F4AC}`
        
    }
}