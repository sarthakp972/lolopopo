/*  const mongoose=require("mongoose");
  mongoose.connect('mongodb://localhost:27017/dbforsarthak');


const userSchema= new mongoose.Schema({
    username:{
            type:String,
            required:true,
            unique:true,

},
    password:{
            type:String,
            required:true,
},  
posts:[],
    dp:{
            type:String,//dp stored as a url 

},
   email:{
          type:String,
          required:true,
},  
    fullname:{
        type:String,
         required:true,
},


})
// const user = mongoose.model('user',userSchema);
// module.exports = user; 
//OR
const User = mongoose.model('User', userSchema);
module.exports = User;*/
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dbforsarthak", {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Recommended for modern MongoDB drivers
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Clean up extra whitespace
  },
  password: {
    type: String,
    required: true,
    // Consider using a password hashing library for security
  },
  posts: [
    // Define the structure of a post here if needed
  ],
  dp: {
    type: String,
    default: "", // Set a default value
  },
  email: {
    type: String,
    required: true,
    lowercase: true, // Normalize for consistency
  },
  fullname: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("User", userSchema);
module.exports = User;
