var Mongoose = require('mongoose');

const connect = ()=>{
    return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo')
}

connect()
.then(connection=>{
    console.log("Mongo Db connection setup Done!!")
})
.catch(err=> console.log(err))