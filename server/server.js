

const dotenv = require('dotenv')
const app = require('./app')
const mongoose = require('mongoose')

const port =  process.env.PORT || 5000


dotenv.config({path: './.env'})

console.log("process.env.connectionString")
console.log(process.env.connectionString)

mongoose.connect(`${process.env.connectionString}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => (console.log("DB connection successful!")))


app.listen(port, ( ) => {
    console.log("app listening on port 5000")
})
