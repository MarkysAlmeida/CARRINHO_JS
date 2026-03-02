let carrinho = [];

// CRIANDO FUNÇÃO
function adicionarProduto(){
//Pegue os inputs
var nomeProduto = document.getElementById("nomeProduto");
var valorProduto = document.getElementById("valorProduto");
var temDesconto = document.getElementById("temDesconto");

if(!nomeProduto || !valorProduto){
    alert("Preencha todos os campos");
    return;
}

let produto = {
    nome: nomeProduto.value,
    valor: parseFloat(valorProduto.value),
    desconto: temDesconto.checked,
    quantidade: 1
}
carrinho.push(produto);

atualizarLista();
}



function atualizarLista(){
    // Peguei o local aonde vamos colocar os produto
    let lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(
     function(produto, index){
        let valorFinal = produto.valor;

        if(produto.valor > 150){
                valorFinal = produto.valor * 0.9;
        }
            total += valorFinal * produto.quantidade;
            
            lista.innerHTML +=`
            <li>
            ${produto.nome} - 
            R$${valorFinal.toFixed(2)}
            (Qtd: ${produto.quantidade})
            
            `;
    }
) //finaliza as funções de cada produto

document.getElementById("total").innerHTML = "Total R$"+total.toFixed(2);
}