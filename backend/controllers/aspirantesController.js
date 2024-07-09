const Aspirante = require('../models/applicants');

exports.getAspirantes = async (req, res) => {
  try {
    const aspirantes = await Aspirante.findAll();
    res.status(200).json({
      meta: {
        status: 200,
        total: aspirantes.length
      },
      data: aspirantes
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addAspirante = async (req, res) => {
  try {
    const aspirante = await Aspirante.create(req.body);
    res.status(201).json({
      meta: {
        status: 201,
      },
      data: aspirante
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAspirante = async (req, res) => {
  try {
    const aspiranteId = req.params.id;
    const [updated] = await Aspirante.update(req.body, {
      where: { id_applicants: aspiranteId }
    });

    if (updated) {
      const updatedAspirante = await Aspirante.findByPk(aspiranteId);
      res.status(200).json({
        meta: {
          status: 200,
        },
        data: updatedAspirante
      });
    } else {
      res.status(404).json({ message: 'Aspirante not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAspirante = async (req, res) => {
  try {
    const aspiranteId = req.params.id;
    const deleted = await Aspirante.destroy({
      where: { id_applicants: aspiranteId }
    });

    if (deleted) {
      res.status(204).json({ message: 'Aspirante deleted' });
    } else {
      res.status(404).json({ message: 'Aspirante not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};