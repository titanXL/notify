let mongoose = require('mongoose')

let NotificationSchema = mongoose.Schema({
    id: {type:Number},
    title: {type: String, required: true},
    type:{ type: String, required: true},
    text:{ type: String, required: false},
    link:{ type: String, required: false},
    image: { type: String, required: false},
    requirement:{ type: String, required: false},
    expires: {type:Number, require: false},
    bonus: { type: String, required: false}
})

module.exports = Notification = mongoose.model('Notification', NotificationSchema)