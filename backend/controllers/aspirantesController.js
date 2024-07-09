const Aspirante = require('../models/aspirante');

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

// Método PUT para actualizar un aspirante
exports.updateAspirante = async (req, res) => {
  try {
    const aspiranteId = req.params.id;
    const [updated] = await Aspirante.update(req.body, {
      where: { id: aspiranteId }
    });

    if (updated) {
      const updatedAspirante = await Aspirante.findOne({ where: { id: aspiranteId } });
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

// Método DELETE para eliminar un aspirante
exports.deleteAspirante = async (req, res) => {
  try {
    const aspiranteId = req.params.id;
    const deleted = await Aspirante.destroy({
      where: { id: aspiranteId }
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
