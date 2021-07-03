module.exports = (sequelize, DataTypes) => {
  const drawing = sequelize.define("drawing", {
    childID: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    nofColors: {
      type: DataTypes.STRING,
    },
    nofObjects: {
      type: DataTypes.STRING,
    },
    complexity: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.STRING,
    },
  });

  return drawing;
};
