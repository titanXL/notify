const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const schedule = require('node-schedule')

let mongoose = require('mongoose')
mongoose.Promise = global.Promise

let NotificationModel = require('./Models/NotificationModel')
let db = require('./database')

app.set('port', process.env.PORT || 3001)

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/notifications', (req, res) => {
    NotificationModel.find({}).then(notifications => {
        res.send(JSON.stringify(notifications))
    })
})

app.post('/api/addnotification', (req, res) => {
    let newNotification = req.body

    NotificationModel.create(newNotification)
    res.end()
})

app.post('/api/deletenotification', (req, res) => {
    let id = req.body.id
    NotificationModel.findOneAndRemove({ id: id }).then((notification) => {

    }).catch(err => console.log(err))
    res.end()
})

app.post('/api/editnotification', (req, res) => {
    NotificationModel.update({ id: req.body.notification.id }, req.body.notification, { upsert: true }, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('updated')
        }
    })
    res.end()
})
var server = app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}/`)
})

io = require('socket.io').listen(server)
let notifications = []
io.sockets.on('connection', (socket) => {
    console.log('connected')
    socket.once('disconnect', () => {
        socket.disconnect()
    })
    socket.on('server/startExpiration', (info) => {
        console.log('started')
        let id = info.id
        let expires = Number(info.expires)
        setTimeout(()=> io.emit('expired', id),expires*1000)
    })
})