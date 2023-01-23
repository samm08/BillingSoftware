const {Schema, model } = require('mongoose')

const schema = new Schema({
    company_name : {
        type: String,
        required: true
    },
    contact_person : {
        type: String,
        required: true
    },
    contact_number : {
        type: Number,
        required: true
    },
    email_id : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    company_address : {
        type: String,
        required: true
    },
    gst_no : {
        type: String,
        required: false
    },
    registration_key : {
        type: String,
        required: true
    }
},{timestamps: true});

const _model = model("companies", schema);
module.exports = _model