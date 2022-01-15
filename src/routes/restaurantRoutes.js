const req = require('express/lib/request');
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },
  filename: function(req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname);
  }
})

const fileFilter = (req, file, callback) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    callback(null, true);
  } else {
    callback(null, false);    
  }
}
const upload = multer({ 
  storage: storage, 
  limits: {
    fileSize: 1 * 1024 * 1024 // 2MB only
  },
  fileFilter: fileFilter
})

const restaurantsController = require('../controllers/restaurantsController');

module.exports = (app) => {
  app.get('/', function(req, res, next) {
    res.send({ ping: 'FSWI Swiggy Clone API' });
  });
  //adaptive practive routes 
  app.get('/restaurants', restaurantsController.index);
  app.get('/restaurants/:id', restaurantsController.show);
  app.post('/restaurants', upload.single('restaurantImage'), restaurantsController.create);
  app.put('/restaurants/:id', restaurantsController.update);
  app.delete('/restaurants/:id', restaurantsController.destroy);
  app.get('/restaurants/:id/menuitems', restaurantsController.menuItems);
}
