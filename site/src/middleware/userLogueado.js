function userLog(req,res,next){
    if(req.cookies.recordame!== undefined&& req.cookies.recordame.rol === "user"){
        res.locals.user = req.cookies.recordame.nombre
            
    }else if(req.session.usuarioLogueado!== undefined&& req.session.usuarioLogueado.rol === "user"){
       
        res.locals.user = req.session.usuarioLogueado.nombre
        res.locals.idUser = req.session.usuarioLogueado.id
            
    }
    next()
    
}

module.exports= userLog