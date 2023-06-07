    // OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    // - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    const buttons = document.querySelectorAll(".botao")
    const images = document.querySelectorAll(".image")
    // - passo 2 - dar um jeito de identificar o clique do usuário no botão
    buttons.forEach((btn, index) =>{
        btn .addEventListener('click', () => {
            // - passo 3 - desmarcar o botão selecionado anterior
            desativarBtn()
            
            // - passo 4 - marcar o botão clicado como se estivesse selecionada
            btn.classList.add("selecionado")

            // - passo 5 - esconder a imagem de fundo anterior
            esconderImage()
            
            // - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
            mostrarImage(index)

        })
    })

    function desativarBtn(){
        const btnSelecionado = document.querySelector(".selecionado")
        btnSelecionado.classList.remove("selecionado")
    }

    function esconderImage(){
        
        const imagemAtiva = document.querySelector(".ativa")
        imagemAtiva.classList.remove("ativa")
    }
    function mostrarImage(index){
        images[index].classList.add("ativa")
    }