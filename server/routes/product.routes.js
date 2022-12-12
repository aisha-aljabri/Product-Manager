const ProductController = require('../controllers/product.controller');

module.exports = function(app){

    app.get('/api/products', ProductController.getallproducts);

    app.post('/api/products/new', ProductController.createproduct);
    app.get('/api/products/:id', ProductController.getproduct);
    app.put('/api/products/:id', ProductController.updateproduct);
    app.delete('/api/products/:id', ProductController.deleteproduct);
}