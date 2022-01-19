const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "restauracum",
  });


regista((req, res) => {
      console.log(req.body);

      const {name, email, password} = req.body;

      db.query('SELECT email FROM users WHERE email = ?', [email], (err, result) =>{ 
          if(err){
              console.log(err);
          }
          if(result.length > 0 ){
              return res.render('authentication', {
                message : 'Email ja em uso' 
              })              
          } else if ( password !== passwordConfirm) {
                return res.render('authentication',{
                    message: 'Verifique se as passwords são iguais'
                })
          }
      })
  });

  module.exports = {regista};