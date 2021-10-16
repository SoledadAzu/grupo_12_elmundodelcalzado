
function userLog(req,res,next){
    if(req.session.usuarioLogueado === undefined){
        res.render('users/login')
    }else if(req.session.rol === "admin"){

        next()
    }
    
}

module.exports= userLog