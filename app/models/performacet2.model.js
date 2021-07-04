module.exports = (sequelize, DataTypes) => {
  const performacet2 = sequelize.define("performacet2", {
    childID: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    drawingResult: {
      type: DataTypes.STRING,
    },
    drawingDuration: {
      type: DataTypes.STRING,
    },
    speechMarks: {
      type: DataTypes.STRING,
    },
    speechDuration: {
      type: DataTypes.STRING,
    },
    firstOverallPerformance: {
      type: DataTypes.STRING,
    },
    acutalPerformance: {
      type: DataTypes.STRING,
    },
  });

  return performacet2;
};
