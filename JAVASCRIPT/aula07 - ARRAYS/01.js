let valores = [6,5,8,1,2,3,4,8]

//para ordenar
valores.sort()
/*
for (let pos =0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
///////////////outra forma //////////////////
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let posicao = valores.indexOf(8)
console.log(``)
