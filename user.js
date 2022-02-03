const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true  //it is used as indexing
    },
    underAge: {
        type: Number,
        default: false
    }
});

module.exports=Mongoose.model('user',userSchema);