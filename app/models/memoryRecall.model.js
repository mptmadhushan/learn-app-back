module.exports = (sequelize, DataTypes) => {
  const memoryRecall = sequelize.define("memoryRecall", {
    childID: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    mrqID: {
      type: DataTypes.STRING,
    },
    answerDuration: {
      type: DataTypes.STRING,
    },
    answerCheck: {
      type: DataTypes.STRING,
    },
    complexity: {
      type: DataTypes.STRING,
    },
    questionType: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.STRING,
    },
  });

  return memoryRecall;
};
