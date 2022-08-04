var express = require('express');
var router = express.Router();
const productController = require('../components/products/Product_controller');
const categoryController = require('../components/categories/Category_controller');
const middleware = require('../middleware/upload');

/* GET products listing. */
//https://localhost:2900/san-pham
router.get('/', async function (req, res, next) {
    const products = await productController.get();
    res.render('products', { products });
});


//Get Product by id
//https://localhost:2900/san-pham/chi-tiet/1
router.get('/chi-tiet/:id', async function (req, res, next) {
    const { id } = req.params;
    const { product, categories } = await productController.getById(id);
    res.render('product', { product, categories });
});


//cập nhật sản phẩm
//middleware
router.post('/chi-tiet/:id', [middleware.single('image')], async function (req, res, next) {
    let { body, file } = req;
    let { id } = req.params;
    delete body.image;
    if (file) {
        let image = `http://192.168.1.6:2900/images/${file.filename}`;
        body = { ...body, image: image }
    }
    await productController.update(id, body);
    console.log(body)
    res.redirect('/san-pham');
});

//xóa sản phẩm
router.post('/xoa/:id', async function (req, res, next) {
    let { id } = req.params;
    await productController.remove(id);
    res.json({ success: true });
});




//sản phẩm
//https://localhost:2900/san-pham/them-moi
//get: chạy ra form thêm mới 
//post: thêm mới sản phẩm 
router.get('/them-moi', async function (req, res, next) {
    const categories = await categoryController.get();
    res.render('form', { categories });
});


//thêm mới sản phẩm
//middleware
router.post('/them-moi', [middleware.single('image')], async function (req, res, next) {
    let { body, file } = req;
    if (file) {
        let image = `http://26.203.95.184:2900/images/${file.filename}`;
        body = { ...body, image: image }
    }
    await productController.insert(body);
    console.log(body)
    res.redirect('/san-pham');
});


module.exports = router;