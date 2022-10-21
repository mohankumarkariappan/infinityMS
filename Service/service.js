module.exports = (app) => {
     app.post('/users', (req, res, next) => {
        res.json({ message: "users" });  
    })
}