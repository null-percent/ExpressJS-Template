// src/index.js
const express = require('express')
const { specs, swaggerUi } = require('./swagger/swagger')
const app = express()
const PORT = process.env.PORT || 3000

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.get('/', (req, res) => {
  res.send('Hello, Operate360!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
