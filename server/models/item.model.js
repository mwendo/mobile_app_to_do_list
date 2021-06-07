const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    item_description: {
        type: String
    }
},
    { timestamps: true })

module.exports.Item = mongoose.model('Item', ItemSchema);