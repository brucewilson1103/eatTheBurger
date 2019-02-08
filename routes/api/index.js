const router = require("express").Router();
const todoRoutes = require("./todoRoutes");

// set up routes and prefix them
router.use("/burgers", todoRoutes);


module.exports = router;
