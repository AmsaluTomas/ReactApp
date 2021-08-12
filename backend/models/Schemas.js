// imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Schemas defn
const userSchema = new Schema ({
    username: {type: String, required:true},
    fullname: {type: String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const tweetSchema = new Schema({
    tweet: {type:String, required:true},
    user: {type: Schema.Types.ObjectId, ref:'user'}
});


// packig for export
const userDef = mongoose.model('user',userSchema,'user');
const tweetDef = mongoose.model('tweets',tweetSchema,'tweets');
const mySchemas = {'userDef':userDef, 'tweetDef':tweetDef};

module.exports = mySchemas;