
function adminLog(req,res,next){
    if(req.cookies.recordame!== undefined&& req.cookies.recordame.rol === "admin"){
       
        res.locals.userAdmin = req.cookies.recordame.nombre
            
    }else if(req.session.usuarioLogueado!== undefined&& req.session.usuarioLogueado.rol === "admin"){
       
        res.locals.userAdmin = req.session.usuarioLogueado.nombre
            
    }
    next()
    
}

module.exports= adminLog