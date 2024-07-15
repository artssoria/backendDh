const express = require('express');
const cors = require('cors');
const methodOverride =  require('method-override');
const sequelize = require('./config/database');
const aspirantesRoutes = require('./routes/aspirantes');
const locationsRoutes = require('./routes/locationsRoutes');
const professionsRoutes = require('./routes/professionsRoutes');




const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.use('/api/aspirantes', aspirantesRoutes);
app.use('/api/locations', locationsRoutes);
app.use('/api/professions', professionsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected.');
    return sequelize.sync({ force: false });
  }).catch(err => {
    console.log('Unable to connect to the database:', err);
  });
});