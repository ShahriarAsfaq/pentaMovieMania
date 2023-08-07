const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/watchlist', require('./routes/watchlist'))


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})