const express = require('express')
const mainRouter = require('./routes/index')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',mainRouter)


app.listen(3000,()=>{
    console.log('server start at port 3000')
})