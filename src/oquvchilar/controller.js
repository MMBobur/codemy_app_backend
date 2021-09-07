const db = require("../model/index");
const jwt = require("jsonwebtoken")
const OquvchiCont = db.oquvchilar;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const oquvchi = {
    ism: req.body.ism,
    familiya: req.body.familiya,
    yili: req.body.yili,
    telefon: req.body.telefon,
    manzili: req.body.manzili,
    guruh_id: req.body.guruh_id,
  };

  OquvchiCont.create(oquvchi)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  OquvchiCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  OquvchiCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  OquvchiCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " Oquvchi was updated succesfully.",
        });
      } else {
        res.send({
          message: `Cannot update oquvchi with id=${id}`,
        });
      }
    })
    .catch((err) => {
      console.log("Update err: " + err);
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  OquvchiCont
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Oquvchi was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete oquvchi with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete oquvchi with id=" + id,
      });
    });
};


// exports.auth = async function (req, res, next) {
//   const {username, password, id} = req.body;
//   OquvchiCont.findAll({
//     where: {
//       username: username,
//       password: password
//     }
//   })
//   .then((data) => {
//     if(data[0].username === username && data[0].password === password){
//       const token = jwt.sign({
//         id : data[0].id,
//         title: username,
//         role: 'user'
//       },
//       process.env.TOKEN_SECRET_KEY,
//       {
//         algorithm:"HS256",
//         expiresIn:process.env.TOKEN_ADMIN_EXPIRESIN,
//       }
//       );
//       return res.status(200).json({ token });
//     }
//   })
//   .catch((err) => {
//     console.log("Errorni yomoni: " + err);
//   });
// }
