const User = require('../models/user');
const {hashPassword,comparePassword} = require('../helpers/auth');

const test = (req, res) => {
    res.json({ message: "Auth route works" })
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if body is emtpy
        if (!name || !password || !email) {
            return res.json({ message: "Please fill in all fields" })
        }
        // Check if password is less than 6 characters
        if (password.length < 6) {
            return res.json({ message: "Password must be at least 6 characters" })
        }
        // Check if user already exists
        const exists = await User.findOne({email})
        if (exists) {
            return res.json({ message: "User already exists" })
        }
        // Hash password
        const hashedPassword = await hashPassword(password)
        // Create new user
        const user = await User.create({name, email, password: hashedPassword})
        // Send user to client
        res.json(user)

    } catch (error) {
        res.json({ message: error.message })
    }
}

// Login
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        // Check if body is emtpy
        if (!password || !email) {
            return res.json({ message: "Please fill in all fields" })
        }
        // Check if user exists
        const user = await User.findOne({email})
        if (!user) {
            return res.json({ message: "User does not exist" })
        }
        // Compare password
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.json({ message: "Invalid credentials" })
        }
        // Send user to client
        res.json(user)

    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}