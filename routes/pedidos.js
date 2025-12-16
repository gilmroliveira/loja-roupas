const express = require('express');
const router = express.Router();
const db = require('../db');

// Listar pedidos
router.get('/', (req, res) => {
  db.query(
    'SELECT p.*, c.nome AS nome_cliente FROM pedidos p JOIN clientes c ON p.id_cliente = c.id_cliente',
    (err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(rows);
    }
  );
});

// Criar pedido
router.post('/', (req, res) => {
  const { id_cliente, produto, quantidade, data_pedido } = req.body;
  db.query(
    'INSERT INTO pedidos (id_cliente, produto, quantidade, data_pedido) VALUES (?, ?, ?, ?)',
    [id_cliente, produto, quantidade, data_pedido],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ id_pedido: result.insertId, id_cliente, produto, quantidade, data_pedido });
    }
  );
});

module.exports = router;
