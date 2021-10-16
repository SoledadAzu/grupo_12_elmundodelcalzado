const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session') // requerimiento de express-session


/***********************REQUERIMIENTOS DE LOS ARCHIVO DE LAS RUTAS PRINCIPALES**************************/
const indexRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const informacionRotuer = require('./routes/extras/information');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // views
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public'))); //public estatico
app.use(methodOverride('_method'));
app.use(session({secret:"esto es un secreto!!"}))



/******************* MUESTRA DE LAS RUTAS********************** */
app.use('/',indexRouter);
app.use('/products',productRouter);
app.use('/user',userRouter);
app.use('/admin',adminRouter)

/**************************EXTRAS*********************************** */
app.use('/informacion',informacionRotuer)


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
