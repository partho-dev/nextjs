const pool = require("../config/pgdb") // Postgress 

const createProducts = async (req, res)=>{
    try {
        const {name, price} = req.body
        const newProduct = await pool.query("INSERT INTO products (name, price) VALUES($1, $2) RETURNING *", [name, price] )
        res.json(newProduct.rows[0])

    } catch (error) {
        console.log(error.message)
    }
}

const getProducts = async (req, res)=>{
    try {
        const allproducts = await pool.query("select * from products")
        res.json(allproducts.rows)
        
    } catch (error) {
        console.log(error.message)
        
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully', product: result.rows[0] });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
}

module.exports = {createProducts, getProducts, deleteProduct }