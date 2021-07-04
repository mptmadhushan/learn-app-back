module.exports = (sequelize, DataTypes) => {
  const performacet1 = sequelize.define("performacet1", {
    childID: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    qID: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.STRING,
    },
    answerCheck: {
      type: DataTypes.STRING,
    },
    answerDuration: {
      type: DataTypes.STRING,
    },
    noAttempts: {
      type: DataTypes.STRING,
    },
    iqMarks: {
      type: DataTypes.STRING,
    },
    mrMarks: {
      type: DataTypes.STRING,
    },
    firstOverallPerformance: {
      type: DataTypes.STRING,
    },
  });

  return performacet1;
};
