;(function(){
    const $btn = $('#btnSync')
    const $cartoes = $('.cartao')

    $btn.click(function(){
        $btn.addClass('botaoSync--esperando')

        const xhr = new XMLHttpRequest()

        xhr.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar/')
        xhr.setRequestHeader('Content-Type', 'application/json')
    
        const objeto = {
            usuario: 'Paiva',
            // cartoes: [
            //     {conteudo: "bla", cor: "#EBFE40"},
            //     {conteudo: "bla2", cor: "#EBFE40"},
            //     {conteudo: "bla3", cor: "#EBFE40"}
            cartoes: listaCartoes
            // ,cartoes: Array.from($('.cartao')).map($cartao => {
            //     return {
            //         conteudo: $cartao.querySelector('p').textContent,
            //         cor: $cartao.style.backgroundColor
            //     }
            // }) //apostila
        }
    
        xhr.send(JSON.stringify(objeto))

        xhr.addEventListener('load', function() {
            $btn.addClass('botaoSync--deuBom')
            $btn.removeClass('botaoSync--deuRuim')
            $btn.removeClass('botaoSync--esperando')
        })

        xhr.addEventListener('error', function() {
            $btn.addClass('botaoSync--deuRuim')
            $btn.removeClass('botaoSync--deuBom')
            $btn.removeClass('botaoSync--esperando')
        })
    })

    $btn.removeClass('no-js')
})()