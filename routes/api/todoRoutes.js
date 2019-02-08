const router = require("express").Router();
const todosController = require("../../config/orm");

// define API routes

// when user hits /api/todos
router
  .route("/")
  .get(todosController.selectAll)
  .post(todosController.insertOne);


// when user hits /api/todos/:id
router
  .route("/:id")
  // .get(todosController.findById)
  .put(todosController.updateOne)
  // .delete(todosController.deleteBurger);

module.exports = router;
