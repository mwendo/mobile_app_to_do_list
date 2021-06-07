const {Item} = require('../models/item.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createItem = (req, res) => {
    Item.create(req.body)
        .then(newItem => res.json({product: newItem}))
        .catch(err => {
            console.log(err);
            res.json({message: "ERROR!", error:err})
        });
}

module.exports.getAllItems = (req, res) => {
    Item.find()
        .then(allItems => res.json({product: allItems}))
        .catch(err => {
            console.log(err);
            res.json({message: "ERROR!"})
        });
}

module.exports.getItem = (req, res) => {
    Item.findOne({_id: req.params._id})
        .then(oneItem => res.json({product: oneItem}))
        .catch(err => res.json({message: "ERROR!"}))
}

module.exports.updateItem = (req, res) => {
    Item.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(updatedItem => res.json({product: updatedItem}))
        .catch(err => {
            console.log(err);
            res.json({message: "ERROR!", error:err})
        });
}

module.exports.deleteItem = (req, res) => {
    Item.deleteOne({_id: req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "ERROR!"}));
}

// module.exports.addSkill = (req, res) => {
//     Item.updateOne(
//         {_id: req.params._id },
//         {$push:{skills: req.body.skill}}
//     )
//         .then(result => res.json({result: result}))
//         .catch(err => res.json({message: 'Something went wrong', error: err}));
// }