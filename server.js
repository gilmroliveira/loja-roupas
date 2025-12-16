const express = require('express');
const cors = require('cors');
const app = express();

const clientesRoutes = require('./routes/clientes');
const pedidosRoutes  = require('./routes/pedidos');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/clientes', clientesRoutes);
app.use('/api/pedidos', pedidosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
