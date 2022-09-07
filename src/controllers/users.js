const {Users} = require('../db/models')
const {getRandomUsername} = require('../utils/username')

async function createAnonUser() {
    const user= await Users.create({
        username: getRandomUsername(),
    })
    return user
}

//Testing the createAnonUser function
// async function task(){
//     console.log(await createAnonUser())
//     console.log('----------------------')
//     console.log(await createAnonUser())
//     console.log('----------------------')
// }

// task()

async function getUserById(id){
    
    if(!id) throw new Error('user id not provided')
    
    return await Users.findOne({where: {id}})
}

// Testing the getUserById()
// async function task(){
//         console.log(await getUserById())
// }
//  task()

async function getUserByUsername(username){
    return await Users.findOne({where:{username}})
}

//Testing the getUserByUsername()
// async function task(){
//     console.log(await getUserByUsername("sleepy-piano"))
// }
// task()

module.exports={
    createAnonUser,
    getUserById,
    getUserByUsername
}