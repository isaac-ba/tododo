var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name:String
});
var Cat = mongoose.model('Tasks', taskSchema);//Something is new collection in MongoDB
module.exports = Cat;
