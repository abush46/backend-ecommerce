import { Schema, model } from 'mongoose';
const jwt = require('jsonwebtoken');
/* import { Schema, model } from 'mongoose';
//const {mongoose} = require('mongoose');
import jwt from 'jsonwebtoken'; */

// const { TOKEN_KEY } = process.env

const userSchema = Schema({
    name : String,
    email : {type : String, required : true, unique : true},
    userType : String,
    password : String,
    token : String,
    wishlist : [{productId : {type: Schema.Types.ObjectId, ref : "product"}, quantity : Number}]

},{timestamps: true})


// userSchema.methods.generateAuthToken = function () {
//     this.token = jwt.sign({ userID: this._id, email: this.email }, TOKEN_KEY, { expiresIn: '10h' })
// }

module.exports = model('user',userSchema)