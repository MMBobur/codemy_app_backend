const db = require("../model/index");
const jwt = require("jsonwebtoken");
const Oqituvchilar = db.oqituvchilar;


exports.create = (req, res) => {
  const teacher_data = {
    ism: req.body.ism,
    familiya: req.body.familiya,
    telefon: req.body.telefon,
    login: req.body.login,
    password: req.body.password,
    image: req.protocol + "://" + req.get("host") + "/uploaded_images/" + req.file.filename,
  };

  Oqituvchilar.create(teacher_data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the oqituvchilar.",
      });
    });
};

exports.findAll = (req, res) => {
  Oqituvchilar.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving oqituvchilar.",
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Oqituvchilar.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving oqituvchilar with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const teacher_data = {
    ism: req.body.ism,
    familiya: req.body.familiya,
    telefon: req.body.telefon,
    login: req.body.login,
    password: req.body.password,
    image: req.protocol + "://" + req.get("host") + "/uploaded_images/" + req.file.filename,
  };

  const id = req.params.id;
  Oqituvchilar.update(teacher_data, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "oqituvchilar was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update oqituvchilar with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating oqituvchilar with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Oqituvchilar.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "oqituvchilar was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete oqituvchilar with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete oqituvchilar with id=" + id,
      });
    });
};


exports.auth = async function (req, res, next) {
  const{login, password, id} = req.body;
  Oqituvchilar.findAll({
    where: {
      login: login,
      password: password
    }
  })
  .then((data) => {
    if(data[0].login === login && data[0].password === password){
      const token = jwt.sign({
        id : data[0].id,
        title: login,
        role: 'user'
      },
      process.env.TOKEN_SECRET_KEY,
      {
        algorithm:"HS256",
        expiresIn:process.env.TOKEN_ADMIN_EXPIRESIN,
      }
      );
      return res.status(200).json({ token });
    }
  })
  .catch((err) => {
    console.log("Error Oqituvchilar token: " + err);
  });
}


// exports.group = (req, res) => {
//   oqituvchilar.sequelize.query("SELECT category_id, (select name from news_website.category where id=news_website.news.category_id) as category_name,(select color from news_website.category where id=news_website.news.category_id) as color, count(id) as amount  FROM news_website.news group by category_id").then((data) => {
//     res.status(200).json(data[0])
//   })
// };