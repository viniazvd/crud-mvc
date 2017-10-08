const Express = require('express')
const user = require('./models/user')
const bodyParser = require('body-parser')

require('./config/database')

let app = new Express()

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.send('pong')
})

/*
app.use('/*', (req, res, next) => {
  if(req.header('Authorization') == 'SecureToken') {
    next()
  } else {
    res.status(401).send()
  }
})
*/
app.use('/users', user)

app.listen(3000)