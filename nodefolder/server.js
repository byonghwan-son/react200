var express = require('express')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var swtoolRouter = require('./routes/SwtoolRoutes')

var app = express()

// middleware
app.use('/', indexRouter)
// middleware
app.use('/users', usersRouter)
// middleware
app.use('/api/Swtool', swtoolRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
