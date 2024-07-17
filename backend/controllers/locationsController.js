const db = require('../models');
const sequelize = db.sequelize;

exports.getProvinces = async (req, res) => {
  try {
    console.log('hola')
    const data = await db.Locations.findAll();
    console.log('bola')
    res.json(data);
    console.log('lola')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const province = req.params.province
    const departments = await Locations.findAll({
      attributes: ['department'],
      group: ['department']
    });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCities = async (req, res) => {
  try {
    const cities = await Locations.findAll({
      attributes: ['city'],
      group: ['city']
    });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};