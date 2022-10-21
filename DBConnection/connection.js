const mssql = require("mssql")

module.exports = async() => {

    try {
    mssql.connect(process.env.DBSQL).then(
        (conn) => {
            console.log("DB Connection Connected ")
            conn.close()

        },
        (error) => {
            console.log("DB Connection  failed to connect ")
        }
    )
}
catch(error){
    console.log("DB Connection  failed to catch connect ")
   console.log(error)

}

}