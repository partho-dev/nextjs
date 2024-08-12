
const Product = require('../models/productsPG.model');



const createProducts = async (req, res) => {
    try {
        const { name, price } = req.body;

        const newProduct = await Product.create({ name, price });

        res.json(newProduct);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};


const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll();

        res.json(allProducts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

module.exports = {createProducts, getProducts, deleteProduct }