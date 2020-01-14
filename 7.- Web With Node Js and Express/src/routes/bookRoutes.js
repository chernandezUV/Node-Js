const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');
const bookService = require ('../services/goodreadsService');



// const sql = require('mssql');//AZURE
// const debug = require('debug')('app:booksRoutes');//AZURE

function router(nav){
  
  const {getIndex, getById, middleware} = bookController(bookService, nav);

  bookRouter.use(middleware);
  bookRouter.route('/')
    .get(getIndex);

  bookRouter.route('/:id')

    // .all((req, res, next)=>{
    // (async function query() {
    //   ;

    //   const request = new sql.Request();//AZURE
    //   const {recordset} = 
    //     await request.input('id',sql.Int, id).query('select * books where id = @id');
    //     [req.book] = recordset;
    //     next();
    // }());
    // })
    .get(getById);

    return bookRouter;
}

module.exports = router;
