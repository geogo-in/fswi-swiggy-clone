const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
const MenuItem = mongoose.model('MenuItem');

// List MenuItems action
exports.index = function(req, res, next) {
  let args = {}
  if (req.params.restaurant) {
    args.restaurant = req.params.restaurant
  }
  MenuItem.find(args, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch menuItems '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show MenuItem action
exports.show = function(req, res, next) {
  MenuItem.findOne({ _id: req.params.id })
    .then(menuItem => {
      return res.status(200).send(menuItem);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}

// Create MenuItem action
exports.create = function(req, res, next) {
  console.log(req.file);
  // Find restaurant
  Restaurant.findOne({ _id: req.body.restaurant })
    .then(restaurant => {
      // Create menuItem
        const menuItem = new MenuItem({
          restaurant: restaurant,
          name: req.body.name,
          description: req.body.description,
          itemImage: req.file.path,
          price: req.body.price,
          offerPrice: req.body.offerPrice,
          isActive: req.body.isActive,
          isVeg: req.body.isVeg
        })
        menuItem.save(function(error, savedObject) {
          if(error) {
            return res.status(422).send({ message: 'Unable to save this menuItem', error: error })
          } else {
            return res.status(200).send(savedObject)
          }
        })
    })
    .catch(error => {
      return res.status(400).send({ error: 'Invalid Restaurant' });
    })
}

// Update MenuItem action
exports.update = function(req, res, next) {
  // TODO
}

// Delete MenuItem action
exports.destroy = function(req, res, next) {
  // TODO
}
