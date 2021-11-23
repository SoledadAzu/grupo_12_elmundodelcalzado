function rememberMe(req,res,next){
    
    if(req.cookies.rememberMe){
        // req.session.usuarioLogueado = req.cookies.rememberMe
        // console.log(req.session.usuarioLogueado);
    }
    next()
}
module.exports=rememberMe