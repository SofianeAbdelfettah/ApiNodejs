const usersController = require('../controllers').users;
const postsController = require('../controllers').posts;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users/:UserId/posts', postsController.create);
  app.get('/api/posts', postsController.list);
  app.put('/api/posts/:id', postsController.update);
  app.delete('/api/posts/:id', postsController.destroy);


  app.post('/api/login', usersController.login);
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:id', usersController.listbyid);
  app.put('/api/users/:id', usersController.update);
  app.delete('/api/users/:id', usersController.destroy);

}
