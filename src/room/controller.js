const db = require("../model/index");

const RoomCont = db.room;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create qabul
  const room = {
    name: req.body.name
  };

  RoomCont.create(room)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  RoomCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  RoomCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  RoomCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Room was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Room with id=${id}. Maybe Room was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log("Update error: " + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  RoomCont.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Room was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Room with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Delete error: " + err);
    });
};
