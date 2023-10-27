function calcular(){
    if (res != '') {
        let num = document.getElementById('num')
        let res = document.getElementById('seltab')
        let msg = document.getElementById('msg')

        
        res.innerHTML += ``

        if (num.value.length == 0) {
            alert('Digite um número!')
        } else {
            let n = Number(num.value)
            

            res.innerHTML += `Gerando tabuada...<br>`
            res.innerHTML += ``
            for (let c = 1; c <= 10; c++) {
                let item = document.createElement('option')
                item.text = `${n} X ${c} = ${n*c}`
                item.value = `tab${c}`
                res.appendChild(item) 
                
            }
        }
    } 
}