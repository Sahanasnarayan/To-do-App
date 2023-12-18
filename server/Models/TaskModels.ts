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
    // taskid is not given
});

const List = mongoose.model('List', ListSchema);

export default List;