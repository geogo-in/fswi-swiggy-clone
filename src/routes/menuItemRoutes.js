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
    fileSize: 1 * 1024 * 1024 // 1MB only
  },
  fileFilter: fileFilter
})

const menuItemsController = require('../controllers/menuItemsController');

module.exports = (app) => {
  //adaptive practive routes 
  app.get('/menuItems', menuItemsController.index);
  app.get('/menuItems/:id', menuItemsController.show);
  app.post('/menuItems', upload.single('itemImage'), menuItemsController.create);
  app.put('/menuItems/:id', menuItemsController.update);
  app.delete('/menuItems/:id', menuItemsController.destroy);
}
