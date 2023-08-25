// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** /PRODUCTS ***/ 
router.get('/', productsController.index); 


/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/remove/:id', productsController.destroy); 


module.exports = router;
