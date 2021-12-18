function rememberMe(req,res,next){
    
    if(req.cookies.rememberMe){
        // req.session.usuarioLogueado = req.cookies.rememberMe
    }
    next()
}
module.exports=rememberMe