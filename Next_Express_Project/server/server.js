const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const userRouter = require("./router/users.router")

const app = express()

//Allow the API to be accessible on FE
app.use(cors())

//Allow the API to receive the data from UI as JSON
app.use(express.json())

//API Routing
app.use("/api/v1", userRouter)

// app.get("/api/v1/users/", (req, res)=>{
//     res.send([{Name : "Jack", Profit: "$100"}, {Name : "Paul", Profit: "$250"}, {Name: "Mr.Smith", Profit: "$300"}])
// })

// DB Connection (Mongoose)
const mongoDB = async ()=> {
    try {
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

    app.listen(process.env.PORT, ()=>{
        console.log(`Server is listening on port ${process.env.PORT}`)
    })
} catch (error) {
    console.log("DB connection failed")
}
}

connectionDBs()
