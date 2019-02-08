const db = require("./connection");

module.exports = {
  // find all todos
  selectAll: function (req, res) {
    db
      .query("SELECT * FROM burgers", function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        res.json(dbBurgers);
      });
  },
  // find burger by id (this will come in req.params.id)
  // findById: function (req, res) {
  //   db
  //     .query("SELECT * FROM todos WHERE id = ?", [req.params.id], function (err, dbTodos) {
  //       if (err) {
  //         console.log(err);
  //         return res
  //           .status(400)
  //           .json(err);
  //       }
  //       res.json(dbTodos[0]);
  //     });
  // },
  // insert / create new todo item (takes in req.body via POST)
  insertOne: function (req, res) {
    // req.body => {todo: "Make a todo"}
    db
      .query("INSERT INTO burgers SET ?", req.body, function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbBurgers);
      });
  },
  // UPDATE/PUT a todo to mark it from incomplete to complete (false => true),
  // this will use req.params.id to know where they're updating
  updateOne: function (req, res) {
    // req.params => {id : 1} req.params.id => 1
    db
      .query("UPDATE burgers SET devoured = true WHERE id =?", [req.params.id], function (err, dbBurgers) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbBurgers);
      })
  },
  // delete a todo based on its id (req.params.id)
  // deleteTodo: function (req, res) {

  //   db.query("DELETE FROM todos WHERE id = ?", [req.params.id], function (err, dbTodos) {

  //       if (err) {
  //         console.log(err);
  //         return res.status(400).json(err);
  //       }
  //       res.json(dbTodos);
  //     });

  // }
}