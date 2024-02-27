// swagger/swagger.js
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Operate360 API (Example)',
      version: '1.0.0',
      description:
        'API documentation for Operate360 - Your Comprehensive ERP System (Example)',
      contact: {
        name: 'Your Name',
        email: 'your.email@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update with your actual server URL
        description: 'Development Server'
      }
      // Add more servers for different environments if needed
    ]
  },
  apis: ['./src/**/*.js'] // Path to your API routes
}

const specs = swaggerJsdoc(options)

module.exports = { specs, swaggerUi }
