const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please enter the task"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;