async function carregarDetalhesProduto(id) {
    try {
        const resposta = await fetch(`${API_BASE_URL}/Produtos/${id}`);
        const produto = await resposta.json();

        const container = document.querySelector('div');
        container.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p> 
            <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p> 
            <p><strong>Quantidade em Estoque:</strong> ${produto.quantidadeEstoque}</p>
            <p><strong>ID do Fornecedor:</strong> ${produto.fornecedorId}</p>
        `;
    } catch (error) {
        console.error('Erro ao carregar os detalhes do produto:', error);
    }
}

carregarDetalhesProduto(new URLSearchParams(window.location.search).get('id')); // Extrai o ID do produto da URL e chama a função para carregar os detalhes do produto