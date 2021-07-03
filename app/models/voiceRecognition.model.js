module.exports = (sequelize, DataTypes) => {
  const memoryRecall = sequelize.define("memoryRecall", {
    childID: {
      type: DataTypes.STRING,
    },
    iqMarks: {
      type: DataTypes.STRING,
    },
    memoryRecallingMarks: {
      type: DataTypes.STRING,
    },
    overallPerformance: {
      type: DataTypes.STRING,
    },
    rating: {
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

  return memoryRecall;
};
