const Professions = require('../models/professions');

exports.getProfessions = async (req, res) => {
  try {
    const professions = await Professions.findAll();
    res.status(200).json(professions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProfession = async (req, res) => {
  try {
    const profession = await Professions.create(req.body);
    res.status(201).json(profession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfession = async (req, res) => {
  try {
    const professionId = req.params.id;
    const [updated] = await Professions.update(req.body, {
      where: { id_profession: professionId }
    });

    if (updated) {
      const updatedProfession = await Professions.findByPk(professionId);
      res.status(200).json(updatedProfession);
    } else {
      res.status(404).json({ message: 'Profession not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProfession = async (req, res) => {
  try {
    const professionId = req.params.id;
    const deleted = await Professions.destroy({
      where: { id_profession: professionId }
    });

    if (deleted) {
      res.status(204).json({ message: 'Profession deleted' });
    } else {
      res.status(404).json({ message: 'Profession not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
