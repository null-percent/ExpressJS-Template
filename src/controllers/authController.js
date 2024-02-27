// src/controllers/loginController.js
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../generated/prisma-client') // Assuming you have a User model from Prisma

const authController = async (req, res) => {
  try {
    // Validate request body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // Authenticate user
    const { username, password } = req.body

    // Check if the user exists
    const user = await User.findOne({
      where: { username }
    })

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Compare hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { userId: user.id, username: user.username },
      'your-secret-key',
      {
        expiresIn: '1h' // Token expires in 1 hour (adjust as needed)
      }
    )

    res.json({ accessToken })
  } catch (error) {
    console.error('Error in loginController:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = authController
