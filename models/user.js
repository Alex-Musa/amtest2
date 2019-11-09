const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref:"appointment"
    }
  ]
});

const user = mongoose.model("users", userSchema);

module.exports = user;
