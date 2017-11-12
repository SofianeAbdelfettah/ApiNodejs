const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Post
      .create({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        UserId: req.params.UserId
      })
      .then((Post) => res.status(201).send(Post))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Post
      .findAll()
      .then((Posts) => res.status(200).send(Posts))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Post
      .findById(req.params.id)
      .then((Post) => {
        if (!Post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return Post
          .update({
            title: req.body.title || Post.title,
            body: req.body.body || Post.body,
          })
          .then(updatedPost => res.status(200).send(updatedPost))
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Post
      .findById(req.params.id)
      .then(Post => {
        if (!Post) {
          return res.status(400).send({
            message: 'Post Not Found',
          });
        }
        return Post
          .destroy()
          .then(() => res.status(204).send("destroyed successfully"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
