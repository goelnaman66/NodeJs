var Mongoose = require('mongoose');
var User = require('./user');

const connect = ()=>{
    return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo')
}

connect()
.then( async connection=>{
    console.log("Mongo Db connection setup Done!!")

    //Just for demo we would delete the document
    await User.deleteMany({});
    

    const user= await User.create({
        firstName: 'Naman',
        lastName: 'Goel',
        email: 'goelnaman66@gmail.com'
    })
    console.log(user);


    //creating multiple users
    await User.create([
        {
            firstName: 'Shubh',
            lastName: 'Goyal',
            email: 'gg@gmail.com'
        },
        {
            firstName: 'Rashmi',
            lastName:'Goel',
            email:"hgdd@gmail.com"
        }
    ])
})

.catch(err=> console.log(err))