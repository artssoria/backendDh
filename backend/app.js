const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const aspirantesRoutes = require('./routes/aspirantes');

const Applicants = require('./models/applicants');
const Location = require('./models/locations');
const Profession = require('./models/professions');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/aspirantes', aspirantesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected.');
    return sequelize.sync({ force: false });
  }).catch(err => {
    console.log('Unable to connect to the database:', err);
  });
});