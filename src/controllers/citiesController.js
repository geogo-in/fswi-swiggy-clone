const mongoose = require('mongoose');
const City = mongoose.model('City');
const Restaurant = mongoose.model('Restaurant');

// List Categories action
exports.index = function(req, res, next) {
  City.find({}, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch categories '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show City action
exports.show = function(req, res, next) {
  City.findOne({ _id: req.params.id })
    .then(city => {
      return res.status(200).send(city);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}
// Create City action
exports.create = function(req, res, next) {
  const city = new City({
    name: req.body.name,
    isActive: req.body.isActive
  })
  city.save(function(error, savedObject) {
    if(error) {
      return res.status(422).send({ message: 'Unable to save this city', error: error })
    } else {
      return res.status(200).send(savedObject)
    }
  })
}

// Update City action
exports.update = function(req, res, next) {
  // TODO
}

// Delete City action
exports.destroy = function(req, res, next) {
  // TODO
}

// City Restaurants
exports.restaurants = function(req, res, next) {
  console.log(req.params.id)
  // Find city
  City.findOne({ _id: req.params.id })
  .then(city => {
    Restaurant.find({ city: city }, function(error, objects) {
      if(error) {
        res.status(422).send({ error: 'Unable to fetch restaurants '})
      } else {
        res.status(200).send(objects)
      }
    })  
  })
  .catch(error => {
    return res.status(400).send({ error: 'Unable to find this resource' });
  })
}