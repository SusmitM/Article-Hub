const {Router} =require('express')

const { 
    findAllComments,
    makeComment,
    getCommentByPostId
} = require('../../controllers/comments')



const route = Router()

route.get('/', async(req,res)=>{
    const comments = await findAllComments()
    res.status(200).send(comments)
})

route.post('/', async (req,res)=>{
    const {userId,postId,title}= req.body
    if((!userId)|| (!postId) || (!title)){
        return res.status(400).send({
            error:'Need userId,postId and title to make a comment'
        })
    }
    const comment = await makeComment(userId,postId,title)

    res.status(201).send(comment)
})




module.exports={
    commentsRoute:route
}