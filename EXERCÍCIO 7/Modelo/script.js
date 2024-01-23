let num = document.getElementById('fnum')
let slc = document.getElementById('fslc')
let res = document.getElementById('res')
let valores = []
function isNumero(n) {
if (Number(n) >= 1 && Number(n) <= 100) {
    return true
} else {
    return false
}

}
function inSlc(n, l) {
if (l.indexOf(Number(n)) != -1) {
    return true
    } else {
    return false
    }
}


function adicionar() {
   if(isNumero(num.value) && !inSlc(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    slc.appendChild(item)
    res.innerHTML = ''
   } else{
    window.alert(`Valor é inválido ou já encotrado na lista`)
   }
   num.value =''
   num.focus()
  
} 

function flz() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
} else {
    let tot = valores.length
    let menor = valores[0]
    let maior = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
        soma += valores[pos]
        media = soma/tot
        if(valores[pos] > maior) {
            maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
        
        }
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> A média entre o valores foi ${media}.</p>` 
}
}
    


