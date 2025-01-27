
### Resumo Geral
O repositório "bootstrap-jquery" é destinado a estudos de Bootstrap e jQuery. Bootstrap é um framework front-end que facilita a criação de layouts responsivos e esteticamente agradáveis com HTML, CSS e JavaScript. jQuery é uma biblioteca JavaScript que simplifica a manipulação do DOM, eventos, animações, etc. tornando o desenvolvimento web mais eficiente.

### jQuery
#### Introdução ao jQuery
jQuery é uma biblioteca JavaScript que visa simplificar o código escrito em JavaScript, permitindo realizar mais com menos código. Ele facilita a manipulação de elementos HTML.

- jQuery é uma biblioteca que simplifica o uso de JavaScript.
- Permite manipular elementos HTML.
- Pode ser utilizado via instalação ou CDNs.
- jQuery é cross-plataform e corrige erros automaticamente.
- Utiliza seletores CSS para manipular o DOM.
- Embora seja antigo, jQuery ainda é útil para projetos pequenos e estáticos.

#### Sintaxe Básica
A estrutura básica do jQuery para manipular elementos é:
```javascript
$('elemento_que_quero_editar').função_que_quero_executar();
```

#### Comparação JavaScript vs jQuery
- Remover listas da tela com jQuery:
```javascript
$('li').remove();
```
- Remover listas da tela com JavaScript:
```javascript
let lista = document.querySelectorAll('li');
lista.forEach((item) => {
    item.remove();
});
```

#### Explicação do Código "Portfólio com jQuery"
O código do portfólio utiliza jQuery para alternar entre temas claro e escuro ao clicar em um checkbox:
```javascript
$(document).ready(function(){
    $('#flexSwitchCheckDefault').on('click', function(){
        let textoatual = $('#tema').text();
        if(textoatual === "Tema Escuro"){
            $('#tema').text("Tema Claro");
        } else {
            $('#tema').text("Tema Escuro");
        }
        $('body').toggleClass('tema-escuro tema-claro');
    });
});
```

### Bootstrap
#### Introdução ao Bootstrap
Bootstrap é um framework front-end que fornece componentes prontos e utilitários CSS para criar layouts responsivos e modernos. Ele facilita a estilização de elementos HTML e a criação de layouts complexos com pouco esforço.

#### Explicação Geral
Bootstrap oferece uma ampla gama de componentes como botões, formulários, modais e grids que podem ser facilmente integrados ao seu projeto. Utilizando classes predefinidas, é possível criar layouts responsivos que se adaptam a diferentes tamanhos de tela.
