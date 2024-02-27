// src/middleware/loginMiddleware.js
import { body } from 'express-validator'

const authMiddleware = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
]

export default authMiddleware
