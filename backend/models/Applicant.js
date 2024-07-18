module.exports = (sequelize, dataTypes) => {

  let alias = "Applicants";
  let cols = {
    id_applicants: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: dataTypes.NOW
    },
    updated_at: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: dataTypes.NOW
    },
    deleted_at: {
      type: dataTypes.DATE,
      allowNull: true
    },
    dni: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: dataTypes.STRING,
      allowNull: false
    },
    url_linkedin: {
      type: dataTypes.STRING,
      allowNull: true
    },
    birthdate: {
      type: dataTypes.DATE,
      allowNull: false
    },
    sex: {
      type: dataTypes.STRING,
      allowNull: false
    },
    image: {
      type: dataTypes.STRING,
      allowNull: true
    },
    id_location: {
      type: dataTypes.INTEGER,
      allowNull: true
    },
    id_profession: {
      type: dataTypes.INTEGER,
      allowNull: true
    }
  };
  let config = {
    tableName: 'applicants',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at'
  }

  const Applicant = sequelize.define(alias, cols, config);

  Applicant.associate = function (models) {

    Applicant.belongsTo(models.Locations, {
      as: "locations",
      foreignKey: "id_location",
    })

    Applicant.belongsTo(models.Professions, {
      as: "Professions",
      foreignKey: "id_profession",
    })
  }

  return Applicant;
}