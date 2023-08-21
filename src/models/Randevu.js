const mongoose = require('mongoose');

const RandevuSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    personnel: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }


});

const Randevu = mongoose.model('Randevu', RandevuSchema);

module.exports = Randevu;