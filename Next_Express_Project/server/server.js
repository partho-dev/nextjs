const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()


// require the Databases
const mongoose = require("mongoose") // Mongo
const sequelize = require('./config/pgdb') // Postgres

const userRouter = require("./router/users.router")
const productRouter = require("./router/productsPG.router")


//Allow the API to be accessible on FE
app.use(cors())

//Allow the API to receive the data from UI as JSON
app.use(express.json())

//API Routing
app.use("/api/v1", userRouter)
app.use("/api/v1", productRouter)

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

    await sequelize.authenticate(); // Verifies the connection
    console.log("PostgreSQL is connected via Sequelize");

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