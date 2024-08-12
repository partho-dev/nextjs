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

module.exports = {createProducts, getProducts }