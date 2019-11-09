const router = require("express").Router();
const userRoutes = require("./user");
const adminRoutes = require("./admin");
const apptRoutes = require("./appointment");

// admin routes
router.use("/admin", adminRoutes);

// user routes
router.use("/users", userRoutes);

// appointment routes
router.use("/appointment", apptRoutes);

module.exports = router;
