async function carregarFornecedores() {

    try {
        const resposta = await fetch("https://localhost:7152/api/Fornecedores");
        const fornecedores = await resposta.json();

        console.log("Fornecedores carregados:", fornecedores);
      
    } catch (error) {
        console.error("Erro ao carregar fornecedores:", error);
    } 
}

carregarFornecedores();