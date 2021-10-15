
function userLog(req,res,next){
    if(req.session.usuarioLogueado === undefined){
        res.render('users/login')
    }else{
        next()
    }
    
}

module.exports= userLog