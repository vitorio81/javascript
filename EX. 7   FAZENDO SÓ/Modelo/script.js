let num = document.getElementById('fnum')
let lista = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true

    } else {
        return false
    }
}
 
function inList (n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar () {
    if(isNumero(num.value) && !inList(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML=''
    } else {
        window.alert('Número inválido, ou já encontrado na lista!')
    }
    num.value =''
    num.autofocus()
}  
function flz() {
    if(valores.length == 0) {
        window.alert('Preencha todas as informaçoes antres de fionalizar!')
    } else {
        let tot = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma/tot
            if(maior < valores[pos]) {
                maior = valores[pos]
            }
            if(menor > valores[pos]) {
                menor = valores[pos]
            }


        }
        res.innerHTML=''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> A soma entres os números selecionados é ${soma}</p>`
        res.innerHTML +=`<p> O maior valor selecionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor selecionado foi ${menor}</p>`
        res.innerHTML += `<p>A média entre o valores foi ${media}</p>`
    }  

}


    
    
    


