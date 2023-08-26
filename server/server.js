

const dotenv = require('dotenv')
const app = require('./app')

const port =  process.env.PORT || 5000


dotenv.config({path: './config.env'})


app.listen(port, ( ) => {
    console.log("app listening on port 5000")
})
