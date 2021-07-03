const db = require("../models");
const Item = db.memoryRecall;

exports.create = async (req, res) => {
  
  const data = {
    childID: req.body.childID,
    name: req.body.name,
    mrqID: req.body.mrqID,
    nofColors: req.body.nofColors,
    nofObjects: req.body.nofObjects,
    complexity: req.body.complexity,
    category: req.body.category,
    score: req.body.score,
  };

  // Save data in the database
  Item.create(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data.",
      });
    });
};

exports.findAll = (req, res) => {
  return Item.findAll({
   
  }).then((data) => {
    console.log(">> All datas", JSON.stringify(data, null, 2));
    res.send(data);
  });
};

exports.findByID = (req) => {
  return Item.findByPk((dataId = req.params.id), {
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(">> Error while finding data: ", err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Item.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "data was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete data with id=${id}. Maybe data was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data with id=" + id,
      });
    });
};
