const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,

      })
      .then((User) => res.status(201).send(User))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll()
      .then((Users) => res.status(200).send(Users))
      .catch((error) => res.status(400).send(error));
  },

  listbyid(req, res) {
    return User
      .findById(req.params.id)
      .then(User => {
        if (!User) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        res.status(200).send(User)
      }).catch((error) => res.status(400).send(error));
  },

  login(req, res) {
    return User
      .findAll({
        where: {
          username: req.body.username,
          password: req.body.password
        }
      })
      .then((Users) => res.status(200).send(Users))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findById(req.params.id)
      .then((User) => {
        if (!User) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return User
          .update({
            username: req.body.username || User.username,
            password: req.body.password || User.password,
            age: req.body.age || User.age,
          })
          .then(updatedUser => res.status(200).send(updatedUser))
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.id)
      .then(User => {
        if (!User) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return User
          .destroy()
          .then(() => res.status(204).send("destroyed successfully"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};
