const router = require("express").Router();
const orm = require("../../config/orm");

// define API routes

// when user hits /api/burgers
router
  .route("/")
  .get(orm.selectAll)
  .post(orm.insertOne);


// when user hits /api/burgers/:id
router
  .route("/:id")
  // .get(orm.findById)
  .put(orm.updateOne)
  .delete(orm.deleteBurger);

module.exports = router;
