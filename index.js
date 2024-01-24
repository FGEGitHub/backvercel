const express = require('express')
const morgan = require('morgan')

const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
//const MySQLStore = require('express-mysql-session')
const passport = require('passport')
const cors = require("cors");
const jwt = require('jsonwebtoken')
const keys = require('./src/keys')


////



//inicializacion
const app = express()
require('./src/lib/passport')
app.set('key', keys.key)

//settings

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views')) // indica donde esta la carpeta views 


app.set('view engine', '.hbs')


//middlwares
/* app.use(session({
    secret: 'faztmysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
})) */

app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) // para recibir datos de formularios
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(cors());



//globalvariables
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    app.locals.success = req.flash('message')
    app.locals.user = req.user
    next();
})


//routes
app.use(require('./src/routes/index'))
//app.use(require('./routes/authentication'))



app.use(express.static(path.join(__dirname, './pdfs')))
app.use(express.static(path.join(__dirname, 'pdfs')))
//public  
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'dbimages')))


//start 
app.listen(app.get('port'), () => {
    console.log(`server onport`, app.get('port'))
})

