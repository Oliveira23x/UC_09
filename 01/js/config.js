const API_BASE_URL = 'https://localhost:7135/api';

// Função para montar cabeçalhos padrão
function getHeaders() {
    const headers =  {
        'Content-Type': 'application/json'
    }

    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`; // Adiciona o token ao cabeçalho se estiver presente
    }
    
    return headers;
}