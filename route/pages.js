const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile("index.html", { root: './public/' })
});
router.get('/product', (req, res) => {
    res.sendFile("product.html", { root: './public/' })
});

module.exports ={ 
    router
};