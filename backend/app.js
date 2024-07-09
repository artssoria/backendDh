const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const aspirantesRoutes = require('./routes/aspirantes');

const app = express();
const port = 3000;

// Middleware para CORS y parseo de JSON
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/aspirantes', aspirantesRoutes);

// Iniciar el servidor y conectar la base de datos
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected.');
  }).catch(err => {
    console.log('Unable to connect to the database:', err);
  });
});
