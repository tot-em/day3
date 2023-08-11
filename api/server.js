// Importing Modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Instance
const app = express()

//middlewares
app.use(bodyParser.json())
app.use(cors())

app.post('/signup', (req, res)=>{
    const {NAME, EMAIL, PASSWORD} = req.body
    console.log('logged from the api')
    console.log(NAME)
    console.log(EMAIL)
    console.log(PASSWORD)
    return console.log('received by the api')
})

const port = 3000

app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON PORT: ${port}`)
})

//Research on Objects, arrays and IP
//Learn more about express, body-parser and cors in nodejs

/**
 * 
 */
