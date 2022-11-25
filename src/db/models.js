const {Sequelize}= require('sequelize');

// DB setup of localhost

// jdbc:mysql://sql12.freesqldatabase.com:3306/sql12577921
// let db =new Sequelize({
//         dialect:'mysql',
        // database:'mocksocial',
        // username:'myuser',
        // password:'mypass'
//     });


// DB setup of Onlinehost
const db = new Sequelize('bd02wnzkcuaiivyfttei','ugipxznqtmmvrvou','846QPmToRaa6xQpfxRZG',{
    host: 'bd02wnzkcuaiivyfttei-mysql.services.clever-cloud.com',
    dialect: 'mysql',

});
    
 

//CREATING TABLES IN THE Database with the fields => user,post,comment
const COL_ID_DEF ={
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true,
}

const COL_USERNAME_DEF ={
    type: Sequelize.DataTypes.STRING(30),
    unique:true,
    allowNull:false,
}


const Users = db.define('user',{
    id:COL_ID_DEF,
    username:COL_USERNAME_DEF,
})

const Posts = db.define('post',{
    id:COL_ID_DEF,
    title:{
        type: Sequelize.DataTypes.STRING(140),
        allowNull:false,
    },
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull:false,
    },
})

const Comments =db.define('comment',{
    id: COL_ID_DEF,
    title:{
        type: Sequelize.DataTypes.STRING(140),
        allowNull:false,  },
})
//Making connection within the table fields
Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports={
    db,
    Users,
    Posts,
    Comments
}


//Checking The Database Connection
// db.authenticate()
// .then(
//     ()=>console.log('Connection Worked')
// )
// .catch(
//     (e)=> console.log(e)
// )