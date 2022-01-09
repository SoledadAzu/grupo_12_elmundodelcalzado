const db = require('../database/models');

const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;


const productVerify = (carrito,id, talle) => {
    let index = -1;
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id == id && carrito[i].talles == talle){ 
            index = i;
            break
        }
    }
    return index
}

const getOrden = async (req) => {
    let orden = await db.Ordens.findOne({
        where : {
            usuarioId : req.session.usuarioLogueado.id,
            estado : 'pendiente'
        }
    })
    return orden
}


module.exports = {
    show : async (req,res) => {
        if(!req.session.cart){
            return res.status(500).json({
                ok : false,
                msg : "Comuníquese con el adminsitrador del sitio"
            })
        }

        let response = {
            ok : true,
            meta : {
                link : getURL(req),
                total : req.session.cart.length
            },
            data : req.session.cart
        }

        return res.status(200).json(response)


    },
    add : async (req,res) => {

        try {

            if(!req.session.usuarioLogueado){
                const error = new Error('No hay usuario logueado');
                error.status = 403
                throw error
            }
    
            
            let producto = await db.Productos.findByPk(req.params.id, {
                include : [{all:true}]
            })

            const {nombre, precio} = producto;

            let item = {
                id : producto.id,
                nombre,
                precio,
                imagen : producto.Imagen[0].nombre,
                cantidad : 1,
                subtotal : precio
            }

            let talles;

           

            if(req.session.cart.length === 0){

                let orden = await getOrden(req);

                if(!orden){

                    orden = await db.Ordens.create({
                        usuarioId : req.session.usuarioLogueado.id,
                        estado : 'pendiente'
                    })
                }

                if(typeof req.body.talles === 'string'){

                    talles = req.body.talles;
                    
                    item = {
                        ...item,
                        talles,
                        ordenId : orden.id
                    }

                    req.session.cart.push(item);

                    await db.Carrito_De_Compras.create({
                        productoId: producto.id,
                        usuarioId: req.session.usuarioLogueado.id,
                        ordenId: orden.id,
                        cantidad : 1,
                        talles
                    })

                }else{
                    
                    let itemsDB = [];

                    req.body.talles.forEach(talles => {

                        item = {
                            ...item,
                            talles,
                            ordenId : orden.id
                        }
    
                        req.session.cart.push(item);

                        let itemDB = {
                            productoId: item.id,
                            usuarioId: req.session.usuarioLogueado.id,
                            ordenId: orden.id,
                            talles,
                            cantidad : 1,

                        }
                        itemsDB.push(itemDB)
                      
    
                    })


                    db.Carrito_De_Compras.bulkCreate(itemsDB, { validate: true })
                        .then('todo bien!!!').catch(error => console.log(error))
                   
                }

            }else{
                let orden = await getOrden(req);


                if(typeof req.body.talles === 'string'){
                    let index = productVerify(req.session.cart, req.params.id, req.body.talles);
                    let orden = await getOrden(req)
    
                    if(index === -1){
                        item = {
                            ...item,
                            talles : req.body.talles,
                            ordenId : orden.id
                        }
                        req.session.cart.push(item);
    
                        await db.Carrito_De_Compras.create({
                            productoId: producto.id,
                            usuarioId: req.session.usuarioLogueado.id,
                            ordenId: orden.id,
                            cantidad : 1,
                            talles : req.body.talles
                        })
                    }else{
    
                        let producto = req.session.cart[index];
                        producto.cantidad++;
                        producto.subtotal = producto.cantidad * producto.precio;
    
                        req.session.cart[index] = producto;
    
                        await db.Carrito_De_Compras.update(
                            {
                                cantidad : producto.cantidad
                            },
                            {
                                where : { 
                                    ordenId : producto.ordenId,
                                    productoId : producto.id,
                                    talles : req.body.talles
                                }
                            })
                    }
                }else{

                    let itemsDB = [];
                    let itemsDBUpdated = [];

                    req.body.talles.forEach( talles => {

                        let index = productVerify(req.session.cart, req.params.id, talles);

                        if(index === -1){
                            item = {
                                ...item,
                                talles,
                                ordenId : orden.id
                            }
                            req.session.cart.push(item);
        
                            let itemDB = {
                                productoId: item.id,
                                usuarioId: req.session.usuarioLogueado.id,
                                ordenId: orden.id,
                                talles,
                                cantidad : 1,

                            }

                            itemsDB.push(itemDB)

                        }else{

                            let producto = req.session.cart[index];
                            producto.cantidad++;
                            producto.subtotal = producto.cantidad * producto.precio;
        
                            req.session.cart[index] = producto;
        
                            let itemDBUpdate = {
                                productoId: producto.id,
                                usuarioId: req.session.usuarioLogueado.id,
                                ordenId: orden.id,
                                talles,
                                cantidad : producto.cantidad
                            }

                            itemsDBUpdated.push(itemDBUpdate)
                        }
   
                    })
                    db.Carrito_De_Compras.bulkCreate(itemsDB, { validate: true })
                        .then('todo bien!!!').catch(error => console.log(error))
                    
                    db.Carrito_De_Compras.bulkUpdate(itemsDBUpdated, { validate: true })
                        .then('todo bien!!!').catch(error => console.log(error))
                }

            }
            let response = {
                ok : true,
                meta : {
                    link : getURL(req),
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

        } catch (error) {
            console.log(error)

            return res.status(error.statusCode || 500).json({
                msg: error.message || "Comuníquese con el administrador"
            })
        }
    },
    remove : async (req,res) => {
        try {
            
            let index = productVerify(req.session.cart, req.params.id, req.params.talle);
            
            let producto = req.session.cart[index]
            
    
            if(producto.cantidad > 1){
                
                producto.cantidad--;
                producto.subtotal = producto.cantidad * producto.precio;
    
                req.session.cart[index] = producto;
    
                await db.Carrito_De_Compras.update(
                    {
                        cantidad : producto.cantidad
                    },
                    {
                        where : { 
                            ordenId : producto.ordenId,
                            productoId : producto.id
                        }
                    })
    
            }else{
    
                req.session.cart.splice(index,1);
    
                await db.Carrito_De_Compras.destroy({ 
                    where : { 
                        ordenId : producto.ordenId,
                        productoId : producto.id
                    }
                })
            }
    
            let response = {
                ok : true,
                meta : {
                    link : getURL(req),
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                msg: "Comuníquese con el administrador"
            })
        }
    }
}