const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jyj930824:dktQS2OYe3bKrkEZ@boilerplate.5tik7tn.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate'

).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
