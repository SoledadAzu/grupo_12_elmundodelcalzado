const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/***********************REQUERIMIENTOS DE LOS ARCHIVO DE LAS RUTAS PRINCIPALES**************************/
const indexRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productRouter = require('./routes/productDetail');
const carritoRouter = require('./routes/carritoDeCompras');
const adminRouter = require('./routes/admin')

/*****************************REQUERIMIENTOS DE LOS ARCHIVOS EN EXTRAS******************************** */
const comprarRouter= require('./routes/extras/comprar')
const defensaRouter= require('./routes/extras/defensaAlConsumidor')
const envioRouter= require('./routes/extras/envios')
const garantiaRouter= require('./routes/extras/garantias')
const privacidadRouter= require('./routes/extras/privacidad')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // views
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public'))); //public estatico


/******************* MUESTRA DE LAS RUTAS********************** */
app.use('/',indexRouter);
app.use('/productDetail',productRouter);
app.use('/',userRouter);
app.use('/carritoDeCompras',carritoRouter);
app.use('/admin',adminRouter)

/**************************EXTRAS*********************************** */
app.use('/',comprarRouter)
app.use('/',defensaRouter)
app.use('/',envioRouter)
app.use('/',garantiaRouter)
app.use('/',privacidadRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
