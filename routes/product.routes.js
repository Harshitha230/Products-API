const express= require('express');
const router= express.Router();

const product_controller= require('../controllers/product.controllers');

router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/getproducts', product_controller.product_getall);
router.get('/:id', product_controller.product_get);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);


module.exports=router;