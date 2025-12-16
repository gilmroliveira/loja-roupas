const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '@IFCE31071991', // troque pela senha do MariaDB
  database: 'loja_roupas'
});

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
    process.exit(1);
  }
  console.log('Conectado ao MySQL!');
});

module.exports = conexao;
