

const cors = require('cors')
const express = require('express')
const { default: AppError } = require('./utils/appError')

const app = express()


app.use(cors())
app.options('*', cors())

app.use(express.json())


app.get("/", (req, res ) => {
    console.log("this is the home URL")
})


app.all('*', (req, res, next) => {
    const err = new AppError(`${req.originalUrl} not found`, 404);

    next(err)
})

module.exports = app;