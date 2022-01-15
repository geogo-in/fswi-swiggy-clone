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
    fileSize: 2 * 1024 * 1024 // 2MB only
  },
  fileFilter: fileFilter
})

const productsController = require('../controllers/productsController');

module.exports = (app) => {
  app.get('/', function(req, res, next) {
    res.send({ ping: 'FSWI Amazon Clone API' });
  });
  //adaptive practive routes 
  app.get('/products', productsController.index);
  app.get('/products/:id', productsController.show);
  app.post('/products', upload.single('productImage'), productsController.create);
  app.put('/products/:id', productsController.update);
  app.delete('/products/:id', productsController.destroy);
}
