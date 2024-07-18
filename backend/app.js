const express = require('express');
const cors = require('cors');
const path = require('path');
const aspirantesRoutes = require('./routes/aspirantesRoutes');
const locationsRoutes = require('./routes/locationsRoutes');
const professionsRoutes = require('./routes/professionsRoutes');

// const Applicants = require('./models/applicants');
// const Location = require('./models/locations');
// const Profession = require('./models/professions');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.use('/api/aspirantes', aspirantesRoutes);
app.use('/api/locations', locationsRoutes);
app.use('/api/professions', professionsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
