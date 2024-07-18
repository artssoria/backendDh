const db = require('../models');

exports.getProfessions = async (req, res) => {
    try {
      const profesiones = await db.Professions.findAll();
      console.log(profesiones);
      res.status(200).json({
        meta: {
          status: 200,
          total: profesiones.length
        },
        data: profesiones
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };