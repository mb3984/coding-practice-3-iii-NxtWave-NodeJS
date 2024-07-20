const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Home Page')
  console.log('Home Page')
})

app.get('/about', (request, response) => {
  response.send('About Page')
  console.log('About Page')
})

module.exports = app
