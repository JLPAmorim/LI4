var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cors = require('cors')
const mysql = require("mysql");
const app = express();
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "restauracum",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM restaurante";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});


app.post("/user/insert", (req, res)=> {

  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  const sqlInsert = "INSERT INTO user (username, email, password) VALUES (?,?,?)"
  db.query(sqlInsert, [username, email, password], (err, result) => {
    console.log(err);
  });
});

app.delete('/api/delete', (req, res) => {
  const name = req.params.name_res
  const sqlDelete = "DELETE FROM name_res WHERE name_res = ?";

  db.query(sqlDelete, name, (err, result) => {
    if (err)  console.log(err);
  });
});


app.put("/api/update", (req, res) => {
  const name = req.body.name_res;
  const description = req.body.description;
  const sqlUpdate = "UPDATE SET description description = ? WHERE name_res = ?";

  db.query(sqlUpdate, [description, name], (err, result) => {
    if (err) console.log(err);
  });

});

app.listen(3001, () => {
  console.log("running on port 3001");
});



app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

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
  res.status(err.status || 500).jsonp({error: err.message})
});

module.exports = app;
