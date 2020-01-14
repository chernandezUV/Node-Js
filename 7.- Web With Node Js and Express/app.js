const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookieParser');
const session = require('express-session');


const app = express();
const port = process.env.PORT || 3000;
// const sql = require('mssql'); //AZURE

// app.use((req, res, next) => {
//    debug('My middleware');
//    next(); 
// });
// //AZURE
// const config ={
//   user:'Library',
//   password:'psL1brary',
//   server:'pslibrary.database.windows.net',
//   database:'PSLibrary',

//   options:{
//     encrypt: true 
//   }

// }
// //AZURE
// sql.connect(config).catch(err => debug(err));



app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));

app.use(cookieParser());
app.use(session({secret:'library'}))

require('./src/config/passport.js')(app);

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views','./src/views');
app.set('views engine','ejs');

const nav = [
  {link:'/books', title:'Book'},
  {link:'/authors', title:'Author'}
];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);


app.use('/books',bookRouter);
app.use('/admin',adminRouter);
app.use('/auth',authRouter);

app.get('/', (req, res) => { 
  res.render(
    'index.ejs',
    {
    nav:[
      {link:'/books',title:'Books'},
      {link:'/authors',title:'Authors'}],
      title: 'Library'
    }
  );
});
//sendFile(path.join(__dirname, '/views/', '/index.html'))

app.listen(port, () => { 
  debug(`Port Running on Port ${chalk.green(port)}`)
})
