
const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },

    register:(req,res)=>{
        res.render('users/registro')
    }
    
}
module.exports=controller

db.user.create({
    user: user,
    email: email,
    password: bcrypt.hashSync(password, 7),
    rolesId: 1,
    avatar: req.file ? req.file.filename: "defaultAvatarImage.png"
})
.then(() => {
    res.redirect("/login")
})
    

res.render("user/register")

