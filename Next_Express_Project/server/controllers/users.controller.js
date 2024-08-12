const userModel = require("../models/user.model")

const homeData = (req, res)=>{
    res.send("This data is coming from express through API")
}

// Create users
const createUsers = async (req, res) => {
    try {
        let newUsers = new userModel(req.body)
        await newUsers.save()
        res.send(newUsers)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

//Get all users
const getUsers = async (req, res)=>{
    let users = await userModel.find()
    try {
        if(users.length > 0) {
            res.send(users)
        }
    } catch (error) {
        res.send("No users found")
    }
    // res.send([{Name : "Jack", Profit: "$100"}, {Name : "Paul", Profit: "$250"}, {Name: "Mr.Smith", Profit: "$300"}])
}

module.exports = {homeData, createUsers, getUsers}