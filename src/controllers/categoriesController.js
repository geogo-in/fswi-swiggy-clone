const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Product = mongoose.model('Product');

// List Categories action
exports.index = function(req, res, next) {
  Category.find({}, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch categories '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show Category action
exports.show = function(req, res, next) {
  Category.findOne({ _id: req.params.id })
    .then(category => {
      return res.status(200).send(category);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}
// Create Category action
exports.create = function(req, res, next) {
  const category = new Category({
    name: req.body.name,
    isActive: req.body.isActive
  })
  category.save(function(error, savedObject) {
    if(error) {
      return res.status(422).send({ message: 'Unable to save this category', error: error })
    } else {
      return res.status(200).send(savedObject)
    }
  })
}

// Update Category action
exports.update = function(req, res, next) {
  // TODO
}

// Delete Category action
exports.destroy = function(req, res, next) {
  // TODO
}

// Category Products
exports.products = function(req, res, next) {
  console.log(req.params.id)
  // Find category
  Category.findOne({ _id: req.params.id })
  .then(category => {
    Product.find({ category: category }, function(error, objects) {
      if(error) {
        res.status(422).send({ error: 'Unable to fetch products '})
      } else {
        res.status(200).send(objects)
      }
    })  
  })
  .catch(error => {
    return res.status(400).send({ error: 'Unable to find this resource' });
  })
}