const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
},
{timestamps: true}
);   

modult.exports = mongoose.model("Category", CategorySchema);