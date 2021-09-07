const db = require("../model/index");

const QabulCont = db.qabul;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.ism) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create qabul
  const qabul = {
    ism: req.body.ism,
    familiya: req.body.familiya,
    yili: req.body.yili,
    telefon: req.body.telefon,
    manzili: req.body.manzili,
  };

  QabulCont.create(qabul)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  QabulCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  QabulCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  QabulCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Candidate was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Candidate with id=${id}. Maybe Candidate was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log("Update error: " + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  QabulCont.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Candidate was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Candidate with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Delete error: " + err);
    });
};
