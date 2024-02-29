const express = require('express')
const mainRouter = require('./routes/index')
const app = express()

app.use(express.json())
app.use('/api',mainRouter)


app.listen(3000,()=>{
    console.log('server start at port 3000')
})