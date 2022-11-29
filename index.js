const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')

const users = require('./routers/users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(users)

app.use(express.static('public'))

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})