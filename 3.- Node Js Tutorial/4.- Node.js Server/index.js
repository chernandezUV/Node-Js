// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (request, response) => {
    response.render('home', {
      name: 'John'
    })
  })


//content of index.js
//HTTP
// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

//EXPRESS
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })

// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

// const express = require('express')
// const app = express()

// app.use((request, response, next) => {
//   console.log(request.headers)
//   next()
// })

// app.use((request, response, next) => {
//   request.chance = Math.random()
//   next()
// })

// app.get('/', (request, response) => {
//   response.json({
//     chance: request.chance
//   })
// })

// app.listen(3000)