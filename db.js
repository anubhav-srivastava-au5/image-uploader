const Sequelize = require('sequelize')

// const db = new Sequelize("image-upload", "postgres", "discodancer", {
//     host: 'localhost',
//     dialect: 'postgres'
// },{
//     logging:false
// });

const db = new Sequelize("postgres://zenysgxr:fHgNI9KXVCrxM8XclqyOMrWgSPDZNx3r@ruby.db.elephantsql.com:5432/zenysgxr",
    {
        logging: false
    }
)

try {
    db.authenticate()
    console.log("database connected")

}
catch{
    console.log("error connectiong to db")
}
db.sync(
    // { force: true }
)

module.exports = db

