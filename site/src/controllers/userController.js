const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },

    register:(req,res)=>{
        res.render('users/registro')
    },
    perfiluser:(req,res)=>{
        res.render("users/perfiluser")
    }
}
module.exports=controller