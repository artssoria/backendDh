module.exports = (sequelize, dataTypes) => {

  let alias = "Locations";
  let cols = {
    id_location: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    city: {
      type: dataTypes.STRING,
      allowNull: false
    },
    department: {
      type: dataTypes.STRING,
      allowNull: false
    },
    province: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };
  let config = {
    tableName: 'locations',
    timestamps: false
  }

  const Location = sequelize.define(alias, cols, config);

  Location.associate = function (models) {
    Location.hasMany(models.Applicants, {
      as: "applicants",
      foreignKey: "id_location",
    })
  }

  return Location;
}