
function adminLog(req,res,next){
    if(req.session.usuarioLogueado!== undefined&& req.session.rol === "admin"){
        res.locals.userAdmin = req.session.usuarioLogueado
            
    }
    next()
    
}

module.exports= adminLog