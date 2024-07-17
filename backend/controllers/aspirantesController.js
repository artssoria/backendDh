const db = require('../models');

exports.getAspirantes = async (req, res) => {
  try {
    const aspirantes = await db.Applicants.findAll();
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

  const {
    dni,
    first_name,
    last_name,
    email,
    phone_number,
    url_linkedin,
    birthdate,
    image,
    id_location,
    id_profession } = req.body

  try {
    console.log(req.body)
    const newApplicant = await db.Applicants.create({
      dni:dni,
      first_name:first_name,
      last_name:last_name,
      email:email,
      phone_number:phone_number,
      url_linkedin:url_linkedin,
      birthdate:birthdate,
      image:'asd',
      id_location: parseInt(id_location,10),
      id_profession: parseInt(id_profession,10)
    })
    console.log(newApplicant)
  }

  catch {

  }
};

// exports.updateAspirante = async (req, res) => {
//   try {
//     const aspiranteId = req.params.id;
//     const [updated] = await db.Applicants.update(req.body, {
//       where: { id_applicants: aspiranteId }
//     });

//     if (updated) {
//       const updatedAspirante = await db.Applicants.findByPk(aspiranteId);
//       res.status(200).json({
//         meta: {
//           status: 200,
//         },
//         data: updatedAspirante
//       });
//     } else {
//       res.status(404).json({ message: 'Aspirante not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.deleteAspirante = async (req, res) => {
//   try {
//     const aspiranteId = req.params.id;
//     const deleted = await Aspirante.destroy({
//       where: { id_applicants: aspiranteId }
//     });

//     if (deleted) {
//       res.status(204).json({ message: 'Aspirante deleted' });
//     } else {
//       res.status(404).json({ message: 'Aspirante not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };