let mongoose = require('mongoose')
let connectionString = 'mongodb://localhost:27017/notifications'

mongoose.connect(connectionString)

let db = mongoose.connection

db.once('open', err=>{
    if(err){
        console.log(err)
    }
    console.log('MONGO READY')
})

db.on('error', err=> console.log('DB error'+ err))

module.exports = db