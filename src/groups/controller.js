const db = require("../model/index");
const GroupsCont = db.groups;

exports.create = (req, res) => {

  const groups = {
    name: req.body.name,
    time: req.body.time,
    days: req.body.days,
    date: req.body.date
  };

  GroupsCont.create(groups)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  GroupsCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  GroupsCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  GroupsCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Groups was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Groups with id=${id}. Maybe Groups was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log("Update error: " + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  GroupsCont.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Groups was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Groups with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Delete error: " + err);
    });
};

