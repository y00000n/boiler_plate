const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key')

const bodyParser = require('body-parser')
const {User} = require('./models/User')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('nodejs로 만든 서버')
})

// Routes
app.post('/register', async (req, res) => {
  try {
      const user = new User(req.body)
      await user.save()
      res.status(200).json({ success: true })
  } catch (err) {
      res.status(400).json({ success: false, err: err.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
