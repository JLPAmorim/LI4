const sql = require("./db.js");

// constructor
const User = function(user) {
  this.email = user.email;
  this.nome = user.nome;
  this.password = user.password;
};

User.getAll = (result) => {
  let query = "SELECT * FROM user";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

module.exports = User;