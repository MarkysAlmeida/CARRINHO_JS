let carrinho = [];

// CRIANDO FUNÇÃO
function adicionarProduto(){
//Pegue os inputs
var nomeProduto = document.getElementById("nomeProduto"); // Peguei o nome do produto
var valorProduto = document.getElementById("valorProduto"); // Peguei o valor do produto
var temDesconto = document.getElementById("temDesconto"); // Peguei o checkbox do desconto
var quantidadeProduto = document.getElementById("quantidadeProduto"); // Peguei a quantidade do produto

if(!nomeProduto.value || !valorProduto.value || !quantidadeProduto.value){
    alert("Preencha todos os campos");
    return
}

let produto = {
    nome: nomeProduto.value,
    valor: parseFloat(valorProduto.value),
    desconto: temDesconto.checked,
    quantidade: parseInt(quantidadeProduto.value)
}
carrinho.push(produto);

atualizarLista();
}


function atualizarLista(){
    // Peguei o local aonde vamos colocar os produto
    let lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";

    let total = 0;
    let valorTotal = 0;
    carrinho.forEach( // Para cada produto do carrinho faça
     function(produto, index){ // index é a posição do produto no carrinho, começando do 0
        let valor = produto.quantidade * produto.valor;
        let valorFinal = valor;

        if(produto.desconto === true && valor > 50){
                valorFinal = valorFinal * 0.9;
        }
           total += valorFinal;
           valorTotal += valor;
            
            lista.innerHTML +=`
            <li>
            <span class="produto-nome">Nome: ${produto.nome}</span>
            <span class="produto-valor">Valor: R$${valorFinal.toFixed(2)}</span>
            <span class="produto-quantidade">Quantidade: ${produto.quantidade}</span>
            `;
    }
) //finaliza as funções de cada produto

// Exibe os valores na tela
document.getElementById("subtotal").innerHTML = "Subtotal R$"+valorTotal.toFixed(2);
document.getElementById("desconto").innerHTML = "Desconto aplicado: R$"+(valorTotal - total).toFixed(2);
document.getElementById("total").innerHTML = "Total R$"+total.toFixed(2);


//Limpar os campos
nomeProduto.value = "";
valorProduto.value = "";
quantidadeProduto.value = "";
temDesconto.checked = false;
}
