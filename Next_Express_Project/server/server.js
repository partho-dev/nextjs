const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()


// require the Databases
const mongoose = require("mongoose") // Mongo
const pool = require("./config/pgdb") // Postgress 

const userRouter = require("./router/users.router")
const productRouter = require("./router/productsPG.router")


//Allow the API to be accessible on FE
app.use(cors())

//Allow the API to receive the data from UI as JSON
app.use(express.json())

//API Routing
app.use("/api/v1", userRouter)
app.use("/api/v1", productRouter)

//Product Routes
//create Products
// app.post("/api/v1/products", async (req, res)=>{
//     try {
//         const {name, price} = req.body
//         const newProduct = await pool.query("INSERT INTO products (name, price) VALUES($1, $2) RETURNING *", [name, price] )
//         res.json(newProduct.rows[0])

//     } catch (error) {
//         console.log(error.message)
//     }
// })

// //List products
// app.get("/api/v1/products", async (req, res)=>{
//     try {
//         const allproducts = await pool.query("select * from products")
//         res.json(allproducts.rows)
        
//     } catch (error) {
//         console.log(error.message)
        
//     }
// })

// DB Connection (Mongoose)
const mongoDB = async ()=> {
    try {
        //Mongo connectivity
        await mongoose.connect(process.env.Mongo_db_URL)
        console.log("Mongo DB is connected")

    } catch (error) {
        console.log(error.message)
    } 
}

//Express is listening on 

const connectionDBs = async () =>{
try {
    await mongoDB()
    console.log("Mongo is connected")

    await pool.connect()
    console.log("Postgress is connected")

    app.listen(process.env.PORT, ()=>{
        console.log(`Server is listening on port ${process.env.PORT}`)
    })
} catch (error) {
    console.log("DB connection failed")
    process.exit(1)
}
}

connectionDBs()

module.exports = app