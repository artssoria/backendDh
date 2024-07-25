const { where } = require('sequelize');
const db = require('../models');
const { body, check, validationResult } = require('express-validator');
const { stack } = require('sequelize/lib/utils');

exports.getAspirantes = async (req, res) => {
  try {
    const data = await db.Applicants.findAll({
      include:[
        {model: db.Professions,
          as: 'professions'
        }
      ]
    });
    
    aspirantes = data.map(aspirante =>{
      return {
        ...aspirante.dataValues,
      image : 'http://localhost:3000/img/' + aspirante.image,
      professions : aspirante.professions.name_profession
    }
    })

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

  let erros = validationResult(req);

  if (erros.errors.length > 0) {
    console.log("Entre aqui")
    return res.json({erros:erros, status:400})
  }

  console.log(erros);
  const {
    dni,
    first_name,
    last_name,
    email,
    phone_number,
    url_linkedin,
    birthdate,
    image,
    sex,
    id_location,
    id_profession } = req.body

  try {
    console.log(req.body)
    let imageName = req.file ? req.file.filename : "default-image.jpg";
    const newApplicant = await db.Applicants.create({
      dni:dni,
      first_name:first_name,
      last_name:last_name,
      email:email,
      phone_number:phone_number,
      url_linkedin:url_linkedin,
      birthdate:birthdate,
      image: imageName,
      sex:sex,
      id_location: parseInt(id_location,10),
      id_profession: parseInt(id_profession,10)
    })
    return res.json({success: 'Registro exitoso!', status: 200})
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