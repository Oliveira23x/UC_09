
async function carregarFornecedores() {
    try{
        //Toda a logica vai aqui
        const resposta = await fetch(`${API_BASE_URL}/Fornecedores`); //Faz a requisição para a API
        const fornecedores = await resposta.json(); //Converte a resposta para JSON, que é um formato mais fácil de trabalhar no JavaScript
       
        const tbody = document.getElementById("tabela-fornecedores") // Seleciona o elemento tbody da tabela onde os dados serão inseridos
        tbody.innerHTML = ''; //Limpa a tabela antes de adicionar os novos dados
 
            fornecedores.forEach(fornecedor => { //Percorre cada fornecedor retornado pela API
            const novaLinhaDaTabela = document.createElement('tr')
            novaLinhaDaTabela.innerHTML = `
                <td>${fornecedor.id}</td>
                <td>${fornecedor.nomeFantasia}</td>
                <td>${fornecedor.cnpj}</td>
            `; // "'" serve para criar uma string multilinha, onde podemos inserir variáveis usando ${variavel}
            tbody.appendChild(novaLinhaDaTabela) //Adiciona a nova linha à tabela
        });
 
        console.log(fornecedores);
    } catch (error) {
        console.error('Erro ao carregar os fornecedores:', error);
    }
 
}
 
carregarFornecedores();
 