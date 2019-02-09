const db = require("./connection");

module.exports = {
  // find all burgers in the database
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
  //     .query("SELECT * FROM burgers WHERE id = ?", [req.params.id], function (err, dbBurgers) {
  //       if (err) {
  //         console.log(err);
  //         return res
  //           .status(400)
  //           .json(err);
  //       }
  //       res.json(dbburgers[0]);
  //     });
  // },
  // insert / create new burger item (takes in req.body via POST)
  insertOne: function (req, res) {
    // req.body => {burger: "Make a burger"}
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
  // UPDATE/PUT a burger to mark it from uneaten to devoured (false => true),
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
  deleteBurger: function (req, res) {

    db.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, dbBurgers) {

        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        res.json(dbBurgers);
      });

  }
}