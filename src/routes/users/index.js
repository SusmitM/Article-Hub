const { Router} = require('express')

const {
    createAnonUser,
    getUserByUsername,
   getUserById
} = require('../../controllers/users')

const route = Router()
//When a get request is made to '/:id' the users from DB is shown
route.get('/:userid', async (req,res) =>{
    let user;
    console.log(req.params.userid)
    // when param is username
    if(isNaN((req.params.userid))){

        user = await getUserByUsername(req.params.userid)
    }
    // when param is userId
    else{
        user= await getUserById(req.params.userid)

    }
    console.log(user)
    if (user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({
            error:'No such user id or Username'
        })
    }
})
//When a Post request is made to '/' then a new user is created
route.post('/', async (req,res) =>{
    const user= await createAnonUser()
    res.status(201).send(user)
})


module.exports={
    usersRoute:route
}