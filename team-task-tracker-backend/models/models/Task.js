const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  assignedTo: String,
  status: String,
  dueDate: String
});

module.exports = mongoose.model('Task', taskSchema);
