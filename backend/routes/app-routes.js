const express = require("express")
const postScema = require("../models/post-scema")
const router = express.Router()
const Post = require("../models/post-scema")


//==================[Add post page]========================
router.post("/add-post", (req, res, next) => {
    const newPost = new Post({
        title:req.body.title,
        description:req.body.description,
        article:req.body.article,
        image:req.body.image
    })
    newPost.save((err, post) => {
        if(err){res.status(500).json({data: err})} 
        else {res.status(200).json({data: post})}
        console.log("---> User was added")
    })
})
//==================[News page]============================
router.get("/news", (req, res, next) => {
    Post.find({}, (err, news) => {
        if(err){res.status(500).json({data: err})} 
        else {res.status(200).json({data: news})}
    })
})
//==================[Post page]============================
router.get("/news/:id", (req, res, next) => {
    Post.find({_id: req.params.id}, (err, news) => {
        if(err){res.status(500).json({data: err})} 
        else {res.status(200).json({data: news})}
    })
})
//==================[Addition functional]==================
// router.delete("/delete/:id", (req, res, next) => {
//     Post.findByIdAndRemove({_id: req.params.id}, (err, post) =>{
//         if(err) {
//             res.status(200).json({data: err})
//         } else {
//             res.status(200).json({data: post})
//             console.log("---> Post deleted")
//         }
//     })
// })
// router.put("/edit", (req, res, next) => {
//     res
//         .status(200)
//         .json({msg: "Edit is working"})
// })
//=========================================================
module.exports = router