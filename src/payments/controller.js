const db = require("../model/index");

const PaymentsCont = db.payments;

exports.create = (req, res) => {

  const payments = {
    pupil_id: req.body.pupil_id,
    payment: req.body.payment,
    date: req.body.date
  };

  PaymentsCont.create(payments)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
    PaymentsCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  PaymentsCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  PaymentsCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Payments was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Payments with id=${id}. Maybe Payments was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log("Update error: " + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  PaymentsCont.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Payments was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Payments with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Delete error: " + err);
    });
};
