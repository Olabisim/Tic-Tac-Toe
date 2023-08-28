

const cors = require('cors')
const express = require('express')
const { default: AppError } = require('./utils/appError')
const mainRoutes = require('./Routers/router')

const app = express()

// removing cors
app.use(cors())
app.options('*', cors())

// body parser
app.use(express.json())

// connected routes
app.use('/', mainRoutes)


app.all('*', (req, res, next) => {
    // const err = new AppError(`${req.originalUrl} not found`, 404);

    // next(err)
})

module.exports = app;