const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Task = new Schema({  
  TaskName: {  
    type: String  
  },  
  TaskDescription: {  
    type: String  
  }
},{  
    collection: 'Task'  
});  
module.exports = mongoose.model('Task', Task);  