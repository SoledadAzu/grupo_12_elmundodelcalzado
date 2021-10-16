function userLog(req,res,next){
    if(req.session.usuarioLogueado!== undefined&& req.session.rol === "user"){
        res.locals.user = req.session.nameLogueado
            
    }
    next()
    
}

module.exports= userLog