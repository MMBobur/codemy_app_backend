const db = require("../model/index");

const LevelsCont = db.levels;

exports.create = (req, res) => {

  const levels = {
    name: req.body.name,
    deadline: req.body.deadline,
  };

  LevelsCont.create(levels)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  LevelsCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving oqituvchilar.",
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  LevelsCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  LevelsCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Levels was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Levels with id=${id}. Maybe Levels was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log("Update error: " + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  LevelsCont.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Levels was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Levels with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Delete error: " + err);
    });
};