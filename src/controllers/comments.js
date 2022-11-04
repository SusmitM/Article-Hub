const {Comments} = require('../db/models')
const {Users, Posts} = require('../db/models')

async function makeComment(userId,postId,title){
    const comment = await Comments.create({
        title,
        userId,
        postId
    })
    return comment
}

async function getCommentByPostId(postId){
    if(!postId) throw new Error('post id not provided')

    return await Comments.findAll({where:{postId}})
}

async function findAllComments(query) {
   
    const comment = await Comments.findAll({
        include: [Users,Posts]
    })
    return comment
}


//Testing the createaNewPost 

//  async function task(){

//      console.log(await makeComment(
//          4,
//          5,
//          'This is a sample comment from user 4',
//          ))
//  }

//  task()

// Testing the getCommentByPostId()

// async function task(){
//         console.log(await getCommentByPostId())
// }
//  task()

// Testing the findAllComments()

// async function task(){
//         console.log(await findAllComments())
// }
//  task()

module.exports={
    makeComment,
    getCommentByPostId,
    findAllComments

}