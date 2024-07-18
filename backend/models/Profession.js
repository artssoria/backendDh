module.exports = (sequelize, dataTypes) => {
  let alias = 'Professions';
  let cols = {
    id_profession: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_profession: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: 'professions',
    timestamps: false,
  };

  const Profession = sequelize.define(alias, cols, config);

  Profession.associate = function (models) {
    Profession.hasMany(models.Applicants, {
      as: 'applicants',
      foreignKey: 'id_applicants',
    });
  };

  return Profession;
};
