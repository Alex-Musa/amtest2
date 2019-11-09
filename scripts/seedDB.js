const mongoose = require("mongoose");
const db = require("../models");

// This file empties the user collection and inserts the user info below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/prestige_db"
);

const usersSeed = [
  {
    username: "user",
    password: "user",
    date: new Date(Date.now())
  },
 
];

const adminSeed = [
  {
    username: "admin",
    password: "admin",
    date: new Date(Date.now())
  },
 
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.admin
  .remove({})
  .then(() => db.admin.collection.insertMany(adminSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
