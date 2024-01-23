    function contar() {
        var inc =window.document.getElementById('txti')
        var fim = window.document.getElementById('txtf')
        var pss = window.document.getElementById('txtp')
        var res = window.document.getElementById('res')

        if(inc.value.length == 0 || fim.value.length == 0) {
            window.alert('[ERRO] Faltam dados!')
        } else {
            res.innerHTML= 'Contando:'
            var i = Number(inc.value)
            var f = Number(fim.value)
            var p = Number(pss.value)
            if (p <= 0){
                window.alert('Passo inválido! Considerando PASSO 1')
                p = 1
            }

            if (i < f) {
                for (var c = i ;c <= f  ; c+=p) {
                    res.innerHTML += `${c} \u{1F449}`
                 }
            } else {
                for (var c = i ;c >= f  ; c -=p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            res.innerHTML += `\u{1F3c1}`
            }
    }
}