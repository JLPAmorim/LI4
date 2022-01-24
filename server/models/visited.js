const sql = require("./db.js");

// constructor
const Visited = function(visited) {
  this.id_user = visited.id_user;
  this.id_restaurant = visited.id_restaurant;
  this.date = visited.date;
};

Visited.create = (newVisited, result) => {
  sql.query("INSERT INTO user_visited_restaurant SET ?", newVisited, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created visited: ", { id_user: res.id_user, ...newVisited });
    result(null, { id_user: res.id_user, ...newVisited });
  });
};

Visited.getByUser = (result) => {
  let query = "SELECT id_restaurant FROM user_visited_restaurant WHERE id_user=?";

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

module.exports = Visited;