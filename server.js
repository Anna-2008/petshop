// Importa o módulo HTTP nativo do Node.js
const http = require('http');

// Importa a biblioteca colors para colorir mensagens no terminal
const colors = require('colors');

// Cria o servidor
const server = http.createServer((req, res) => {

  // ROTA HOME
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Bem-vindo ao Petshop 🐶</h1>');

  // ROTA API - PETSHOP
  } else if (req.url === '/api/petshop') {

    const servicos = [
      { id: 1, nome: 'Banho' },
      { id: 2, nome: 'Tosa' },
      { id: 3, nome: 'Veterinário' }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(servicos));

  // ROTA 404
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Erro 404 - Página não encontrada');
  }
});

// Servidor escutando na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000'.green);
});

