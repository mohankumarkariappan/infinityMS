const express = require("express")
const service = require("./Service/service.js")
const dbconn = require("./DBConnection/connection.js")
const { PORT } = require('./config')
const cors = require("cors")

// const routes = require('./api_routes/routes')

// routes(app);

const startServer  = async() => {
const app = express();
app.use(express.json());


  app.use(cors())

console.log(PORT , "port")
const port =  PORT;
//service(app)

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
}

startServer();
