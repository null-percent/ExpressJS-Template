// src/routes/loginRoute.js
const express = require('express')
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
// const { specs } = require('../../swagger/swagger') // Update the path accordingly

const router = express.Router()

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Authenticate a user.
 *     description: Authenticate a user with a valid username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login. Returns an access token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *       400:
 *         description: Bad request. Invalid input data.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 *       500:
 *         description: Internal Server Error.
 */
router.post('/login', authMiddleware, authController)

module.exports = router
