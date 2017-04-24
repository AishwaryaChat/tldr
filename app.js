const express = require('express')
const app = express()
const path = require('path')

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/login.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/register.html'))
})

app.listen(3000)
