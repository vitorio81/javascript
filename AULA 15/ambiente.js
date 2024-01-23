/*let valores = [1, 2, 3, 4, 5, 6]
for(let pos = 0; pos < valores.length; pos++)
console.log(` A posição ${pos} tem o valos ${valores[pos]}`)*/


let valores = [1, 2, 3, 4, 5]
for(let pos in valores) {
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}
let bus = valores.indexOf(5)
console.log('BUSCA DE VALORES')
if (bus == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${bus} `)
}
