const users= require("../database/users.json")

module.exports = (req, res, next) =>{
    console.log(req.name)
    const user = users.find(user => user.name.tolowerCase().trim() ===req.name)

    if(user){
        next()
    }else{
        res.render("/user/login")
    }
}