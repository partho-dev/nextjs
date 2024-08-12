const express = require("express")
const { getUsers, createUsers, homeData } = require("../controllers/users.controller")
const router = express.Router()



router.get("/", homeData)

// Create users
router.post("/users", createUsers)

//Get the lists of users
router.get("/users", getUsers)


module.exports = router