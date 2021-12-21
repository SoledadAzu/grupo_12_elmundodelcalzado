function rememberMe(req,res,next){
    
    if(req.cookies.rememberMe != undefined && req.session.usuarioLogueado == undefined){
        req.session.usuarioLogueado = req.cookies.rememberMe
    }
    next()
}
module.exports=rememberMe