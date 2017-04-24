const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('My server is running')
})

app.listen(3000)
