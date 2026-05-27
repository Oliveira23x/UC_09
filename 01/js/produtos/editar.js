async function editarProdutos() {   

    try {
        const resposta = await fetch(`${API_BASE_URL}/Produtos/${new URLSearchParams(window.location.search).get('id')}`);
        const produto = await resposta.json();

        const form = document.getElementById('form-editar-produto');
        form.nome.value = produto.nome;
        form.preco.value = produto.preco;
        form.quantidadeEstoque.value = produto.quantidadeEstoque;
        form.fornecedorId.value = produto.fornecedorId;
    }
        catch (error) {
            console.error('Erro ao carregar os produtos:', error);
        }
    
}

editarProdutos();


