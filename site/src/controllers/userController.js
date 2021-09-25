const login=require("../database/login.json")
const controller ={
    login:(req,res)=>{
        res.render('users/login',{login})
    },

    register:(req,res)=>{
        res.render('users/registro')
    }
}
module.exports=controller