Segue um modelo de `README.md` pronto para você colar no repositório e adaptar se quiser:


Loja de Roupas

Aplicação web simples para gerenciamento de uma loja de roupas, com cadastro de clientes utilizando Node.js, Express e MariaDB.

1. Como executar o projeto

1.1. Pré-requisitos

- Node.js instalado (versão LTS recomendada).
- MariaDB ou MySQL instalado e em execução.
- Git (opcional, para clonar o repositório).
1.2. Clonar o repositório

```
git clone https://github.com/gilmroliveira/loja-roupas.git
cd loja-roupas
```

 1.3. Instalar dependências

```
npm install
```

 2. Configuração do banco de dados (MariaDB)

 2.1. Criar o banco de dados

Abra o cliente do MariaDB (por exemplo, `mysql` no terminal) e execute:

```
CREATE DATABASE loja_roupas;
USE loja_roupas;
```

 2.2. Criar a tabela de clientes

```
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2.3. Configurar conexão no código

No arquivo de conexão (por exemplo `db.js`), ajustar os dados do banco caso necessário:

```
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // ajustar se o usuário for diferente
  password: 'SENHA',   // ajustar para a senha correta
  database: 'loja_roupas'
});

module.exports = connection;
```

Para rodar em outro computador, o professor só precisa:

1. Instalar o MariaDB.
2. Criar o mesmo banco (`loja_roupas`) e a mesma tabela `clientes`.
3. Ajustar `user` e `password` em `db.js` para o usuário local dele.
4. Rodar o servidor Node normalmente (ver abaixo).

 3. Executar o servidor backend

Na pasta do projeto:

```
node server.js
```

O servidor sobe em:

```
http://localhost:3000
```

(Se a porta for outra no código, ajustar aqui.)

4. Acessar o sistema
 4.1. Acesso local (na mesma máquina)

Abrir no navegador:

```
http://localhost:3000
```

A partir dessa página é possível acessar o formulário de cadastro de clientes e demais funcionalidades.
 4.2. Acesso a partir de outro computador na mesma rede

Quando o servidor estiver rodando na máquina do aluno (esta máquina), outro computador **na mesma rede** pode acessar usando o IP local:

- IP desta máquina: `00.000.000`
- Porta do servidor (exemplo): `3000`

URL para outro computador na **mesma rede**:

```
http://00.000.000:3000
```

Observações importantes:

- O servidor Node precisa estar rodando (`node server.js`).
- O firewall do Windows pode pedir permissão para Node.js aceitar conexões; é necessário permitir na rede privada.

5. GitHub Pages (somente frontend)

O projeto também possui uma versão estática (somente frontend) publicada no GitHub Pages:

```
https://gilmroliveira.github.io/loja-roupas/loja-de-roupa/index.html
```

- Esse link mostra apenas a interface da loja (HTML/CSS/JS).
- **Não executa** o backend Node.js nem se conecta ao banco MariaDB; portanto, ações como “adicionar cliente” **não funcionam** via GitHub Pages.
- Para testar o cadastro de clientes, é necessário rodar o backend localmente (seções 2 e 3 deste README).

6. Como o professor pode testar em outro PC

1. Clonar o repositório:
   ```
   git clone https://github.com/gilmroliveira/loja-roupas.git
   cd loja-roupas
   ```

2. Instalar dependências:
   ```
   npm install
   ```

3. Instalar e configurar MariaDB:
   - Criar o banco `loja_roupas`.
   - Criar a tabela `clientes` com o script da seção 2.2.
   - Ajustar `db.js` com o usuário e senha do MariaDB na máquina do professor.

4. Executar o servidor:
   ```
   node server.js
   ```

5. Acessar no navegador do próprio professor:
   ```
   http://localhost:3000
   ```

Opcionalmente, o professor também pode acessar a versão estática do frontend pelo GitHub Pages pelo link informado na seção 5.
```

Pontos para você só conferir/ajustar antes de commitar:

- Nome real do banco, tabela e campos (se forem diferentes).
- Porta usada no `server.js` (ajustar `3000` se outra).
- Caminho correto do front no GitHub Pages (se mudou a pasta).
