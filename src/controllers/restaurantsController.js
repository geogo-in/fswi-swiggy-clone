const mongoose = require('mongoose');
const City = mongoose.model('City');
const Restaurant = mongoose.model('Restaurant');
const MenuItem = mongoose.model('MenuItem');

// List Restaurants action
exports.index = function(req, res, next) {
  Restaurant.find({}, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch restaurants '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show Restaurant action
exports.show = function(req, res, next) {
  Restaurant.findOne({ _id: req.params.id })
    .populate('city')
    .then(restaurant => {
      return res.status(200).send(restaurant);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}

// Create Restaurant action
exports.create = function(req, res, next) {
  console.log(req.file);
  // Find city
  City.findOne({ _id: req.body.city })
    .then(city => {
      // Create restaurant
        const restaurant = new Restaurant({
          city: city,
          name: req.body.name,
          description: req.body.description,
          address: req.body.address,
          restaurantImage: req.file.path,
          costForTwo: req.body.isPublished,
          isActive: req.body.isActive,
          avgRating: req.body.avgRating,
          reviewCount: req.body.reviewCount
        })
        restaurant.save(function(error, savedObject) {
          if(error) {
            return res.status(422).send({ message: 'Unable to save this restaurant', error: error })
          } else {
            return res.status(200).send(savedObject)
          }
        })
    })
    .catch(error => {
      return res.status(400).send({ error: 'Invalid City' });
    })
}

// Update Restaurant action
exports.update = function(req, res, next) {
  // TODO
}

// Delete Restaurant action
exports.destroy = function(req, res, next) {
  // TODO
}

exports.menuItems = function(req, res, next) {
  console.log(req.params.id)

  // Restaurant.findOne({ _id: req.params.id })
  // .then(restaurant => {
  //   return res.status(200).send(restaurant);
  // })
  // .catch(error => {
  //   return res.status(400).send({ error: 'Unable to find this resource' });
  // })

  // Find restaurant
  Restaurant.findOne({ _id: req.params.id })
    .then(restaurant => {
      MenuItem.find({ restaurant: restaurant }, function(error, objects) {
        if(error) {
          res.status(422).send({ error: 'Unable to fetch MenuItems '})
        } else {
          res.status(200).send(objects)
        }
      })  
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}
