// src/middleware/loginMiddleware.js
import { body } from 'express-validator'

const loginMiddleware = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
]

export default loginMiddleware
