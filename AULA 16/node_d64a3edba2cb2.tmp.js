/*function parimp(n) {
if (n%2 == 0) {
    return 'par'
} else {
    return 'ímpar'
}
} 
let res = parimp(11)
console.log(`O número selecionado é ${res}`)*/



/*function soma (n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(3,4))*/

/*let v = function(x) {
    return x*2
}
console.log(v(5))*/

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c-1) {
        fat *= c 
    }
}
console.log(fatorial(5))