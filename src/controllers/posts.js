const async = require('hbs/lib/async')
const {Users, Posts} = require('../db/models')
const {getUserById} = require('../controllers/users')

async function createNewPost(userId, title, body){

    const post = await Posts.create({
        title,
        body,
        userId,

         
    })
return post
}

async function findAllPosts(query) {
   
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts
}

module.exports={
    createNewPost,
    findAllPosts
}

//Testing the createaNewPost 

// async function task(){

//     console.log(await createNewPost(
//         3,
//         'This is a sample post',
//         'Body of the post goes here'
//         ))
// }

// task()