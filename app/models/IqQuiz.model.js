module.exports = (sequelize, DataTypes) => {
  const iqQuiz = sequelize.define("iqQuiz", {
    childID: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    iqID: {
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

  return iqQuiz;
};
