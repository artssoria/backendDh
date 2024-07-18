const db = require('../models');

exports.getProvinces = async (req, res) => {
  try {
    const data = await db.Locations.findAll({
      attributes: [
        [db.Sequelize.fn('DISTINCT', db.Sequelize.col('province')), 'province']
      ]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const province = req.params.province;
    const departments = await db.Locations.findAll({
      attributes: ['department'],
      where: {
        province: province
      },
      group: ['department']
    });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCities = async (req, res) => {
  try {
    const department = req.params.department;
    const cities = await db.Locations.findAll({
      attributes: ['id_location', 'city'], // Incluye 'id_location' además de 'city'
      where: {
        department: department
      },
      group: ['id_location', 'city'] // Agrupa por 'id_location' y 'city' para evitar duplicados
    });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};