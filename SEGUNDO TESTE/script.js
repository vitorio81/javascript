
function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERR0] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança 
                img.setAttribute('src' ,'foto_bebe_menino.jpg')
                document.body.style.background = '#6F7068'
             
            } else if (idade < 21) { 
                //jovem
                img.setAttribute('src' , 'foto_jovem_masculina.jpg')
                document.body.style.background ='#D7C9AC'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'foto_adulto_homem.jpg')
                document.body.style.background ='#ABAEB5'
            } else {
                //idoso
                img.setAttribute('src' , 'foto_idoso_homem1.jpg')
                document.body.style.background ='#313131'
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança 
                img.setAttribute('src' , 'foto_bebe_menina.jpg')
                document.body.style.background = '#D38308'
            } else if (idade < 21) { 
                //jovem
                img.setAttribute('src' , 'foto_jovem_menina.jpg')
                document.body.style.background = '#149694'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src' , 'foto_adulta_mulher.jpg')
                document.body.style.background ='#1E4F77'
            } else {
                //idoso]
                img.setAttribute('src' , 'foto_idosa_mulher.jpg')
                document.body.style.background = '#BCB668'

            }
        }
    
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        

    }
}
    

    


