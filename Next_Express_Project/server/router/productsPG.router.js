const express = require("express")
// const { getUsers, createUsers, homeData } = require("../controllers/users.controller")
const {createProducts, getProducts, deleteProduct } = require("../controllers/productsPG.controller")
const router = express.Router()



// Create products
router.post("/products", createProducts)

//Get the lists of products
router.get("/products", getProducts)

//Deelete a product
router.delete("/products/:id", deleteProduct)


module.exports = router