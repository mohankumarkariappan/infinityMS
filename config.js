const dotenv = require("dotenv")

dotenv.config();


module.exports =  {
    DBSQL : process.env.DBSQL,
    PORT : process.env.PORT,

}