const express = require('express');
const router = express.Router();
const db = require('../db');

// Listar clientes
router.get('/', (req, res) => {
  db.query('SELECT * FROM clientes', (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
});

// Criar cliente
router.post('/', (req, res) => {
  const { nome, email, telefone, endereco } = req.body;

  if (!nome || !email || !telefone || !endereco) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  db.query(
    'INSERT INTO clientes (nome, email, telefone, endereco) VALUES (?, ?, ?, ?)',
    [nome, email, telefone, endereco],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({
        id_cliente: result.insertId,
        nome,
        email,
        telefone,
        endereco
      });
    }
  );
});

// Atualizar cliente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, endereco } = req.body;

  db.query(
    'UPDATE clientes SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE id_cliente = ?',
    [nome, email, telefone, endereco, id],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      if (result.affectedRows === 0) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
      }
      res.json({ mensagem: 'Cliente atualizado' });
    }
  );
});

// Remover cliente
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM clientes WHERE id_cliente = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      if (result.affectedRows === 0) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
      }
      res.json({ mensagem: 'Cliente removido' });
    }
  );
});

module.exports = router;
