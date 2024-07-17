module.exports = (sequelize, dataTypes) => {

  let alias = "Professions";
  let cols = {
    id_profession: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name_profession: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };
  let config = {
    tableName: 'professions',
    timestamps: false
  }

  const Profession = sequelize.define(alias, cols, config);

  // Profession.associate = function (models) {
  //   Profession.belongsToMany(models.Applicants, {
  //     as: "applicants",
  //     through: "applicants_professions",
  //     foreignKey: "id_professions",
  //     otherKey: "id_applicants",
  //     timestamps: false
  //   })
  // }

  return Profession;
}