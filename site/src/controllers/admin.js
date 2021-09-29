
const controller={
    admin:(req,res)=>{
        res.render('admin/admin')
    },
    create:(req,res)=>{
        res.render('admin/create')
    },
    edit:(req,res)=>{
        res.render('admin/edit')
    }

}
module.exports=controller;