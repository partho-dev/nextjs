const express = require("express")
// const { getUsers, createUsers, homeData } = require("../controllers/users.controller")
const {createProducts, getProducts } = require("../controllers/productsPG.controller")
const router = express.Router()



// Create products
router.post("/products", createProducts)

//Get the lists of products
router.get("/products", getProducts)


module.exports = router