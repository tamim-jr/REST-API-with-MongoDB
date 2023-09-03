const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        require: true,
    },
    photo:{
        type: String,
        required: false
    },
    username:{
        type: String,
        required: true
    },
    categories:{
        type: Array,
        required: false
    },
},
{timestamps: true}
);   

modult.exports = mongoose.model("Post", PostSchema);