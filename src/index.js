// src/index.js
const express = require('express')
const bodyParser = require('body-parser')
const { specs, swaggerUi } = require('./swagger/swagger')
const app = express()
const PORT = process.env.PORT || 3000
const authRoutes = require('./routes/auth')

app.use(bodyParser.json())

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello, Operate360!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
