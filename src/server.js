
const express = require('express')
const app =express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port= process.env.PORT || 5050
const {db} =require('./db/models')
const { usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts')


app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public') )



//Starting the db i.e creating all the Tables that are defined in db/models
db.sync()
.then(
    ()=>{
        app.listen(port,()=>{
            console.log('Server started on http://localhost:5050')
        })
    }
)
.catch(
    (e)=>{console.error(new Error('Could not start the Database'))
console.log(e)
})