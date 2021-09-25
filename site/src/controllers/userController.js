const registro= require("../database/registro.json")
const btnregistro=require("../database/btnregistro.json")
const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },

    register:(req,res)=>{
        res.render('users/registro',{registro,btnregistro})
    }
}
module.exports=controller