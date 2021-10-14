
const controller ={
    compra:(req,res)=>{
        res.render('extras/comprar')
    },
    defensa:(req,res)=>{
        res.render('extras/defensaAlConsumidor')
    },
    envio:(req,res)=>{
        res.render('extras/envios')
    },
    garantia:(req,res)=>{
        res.render('extras/garantias')
    },
    privacidad:(req,res)=>{
        res.render('extras/privacidad')
    },
    politicaDeCambio:(req,res)=>{
        res.render('extras/politicaDeCambios')
    },
    acercaDeNosotros:(req,res)=>{
        res.render('extras/acercaDeNosotros')
    }
}
module.exports=controller;