const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const postSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    article:{type:String},
    image:{type:String},
}, {collection: "PR1Posts"})

module.exports = mongoose.model("Post", postSchema)