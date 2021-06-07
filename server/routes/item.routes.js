const ItemController = require('../controllers/item.controller');

module.exports = function(app){
    app.get('/api', ItemController.index);
    app.post('/api/new', ItemController.createItem);
    app.get('/api/items', ItemController.getAllItems);
    app.get('/api/item/:_id', ItemController.getItem);
    app.put('/api/item/update/:_id', ItemController.updateItem);
    app.delete('/api/item/delete/:_id', ItemController.deleteItem);
    // app.patch('/api/item/:_id/addskill', ItemController.addSkill);
}