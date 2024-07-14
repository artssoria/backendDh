const express = require('express');
const cors = require('cors');
const aspirantesRoutes = require('./routes/aspirantes');
const locationsRoutes = require('./routes/locationsRoutes');

// const Applicants = require('./models/applicants');
// const Location = require('./models/locations');
// const Profession = require('./models/professions');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/aspirantes', aspirantesRoutes);
app.use('/api/locations', locationsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});