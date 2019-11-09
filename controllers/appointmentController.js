const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAllByUser: function (req, res) {
        const userId = req.params.userId
        res.json({userId})
    },
    create: function (req, res) {
        const userId = req.params.userId
        db.appointment
            .create(req.body)
            .then((appt) => {
                return db.user.findOneAndUpdate(
                    { _id: userId },
                    { $push: { appointments: appt._id } },
                    { new: true }
                )
            })
            .then((user => {
                res.json(user)
            }))
    }
};
