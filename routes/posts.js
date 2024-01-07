const mongoose =require("mongoose");

const postSchema=({

    postText:{
        type:String,
        requred:true,
    },
    createdAt:{
        type:Date,
        default:0,
    },
    likes:{
        type:Array,
        default:[],
    },


});
module.exports=mongoose.model('posts',postSchema)

