        //Vamos criar uma função que ao clicar, muda o tema da página;
        // Como vai funcionar:
        // Temos a checkbox, id ("flexSwitchCheckDefault"), ao clicar, ela munda para um tema, no caso, o claro.
        //  SE, ela já estiver clicada, e clicar novamente, ela muda para o tema escuro, retoma no estado "original".

        // o .ready é para garantir que o documento está pronto para ser manipulado.
        $(document).ready(function(){
            $('#flexSwitchCheckDefault').on('click', function(){

                // Vamos armazenar o texto!

                let textoatual = $('#tema').text(); // ".text" pega o TEXTO DENTRO

                // Agora vamos criar a função de alterar o texto.

                if(textoatual === "Tema Escuro"){
                    $('#tema').text("Tema Claro");
                } else {
                    $('#tema').text("Tema Escuro");
                }

                // Alterando as classes, com auxilio do css

                $('body').toggleClass('tema-escuro tema-claro');

            })
        })

        // Que negócio top, essa troca de classes é muito útil, e o jquery facilita muito isso.
        // Ela fica no css, funciona assi, ele troca com base na ordem, se a classe "tema-escuro" estiver ativa, ele troca para "tema-claro", e vice-versa.

        // Vamos configurar o formulário!


        $(document).ready(function(){
            $('#enviar-mensagem').on('click', function(){
                // Vamos armazenar os valores dos inputs
                let nome = $('#exampleFormControlInput1').val();
                let mensagem = $('#exampleFormControlTextarea1').val(); //o .val pega os valores de dentro do input

                // Vamos criar um alerta, com os valores para testar
                alert(`Nome: ${nome} \n Mensagem: ${mensagem}`);

                // vamos "colocar" o whatz:

                let url = `https://api.whatsapp.com/send?phone=SEUNUMERO&text=Olá, sou ${nome}%0AMensagem: ${mensagem}`;
                window.open(url, '_blank');
            })
        })