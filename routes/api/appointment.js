const router = require("express").Router();
const apptController = require("../../controllers/appointmentController");

// Matches with "/api/appointment/:userId
router.route("/:userId")
    .get(apptController.findAllByUser)
    .post(apptController.create);

// Matches with "/api/appointment/:userId/:apptId"
// router.route("/:userId/:apptId")
//     .get(apptController.findById)
//     .put(apptController.update)

module.exports = router;
