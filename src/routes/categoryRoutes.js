const req = require('express/lib/request');

const categoriesController = require('../controllers/categoriesController');

module.exports = (app) => {
  //adaptive practive routes 
  app.get('/categories', categoriesController.index);
  app.get('/categories/:id', categoriesController.show);
  app.post('/categories', categoriesController.create);
  app.put('/categories/:id', categoriesController.update);
  app.delete('/categories/:id', categoriesController.destroy);
  app.get('/categories/:id/products', categoriesController.products);
}
