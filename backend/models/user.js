const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//unique does not validate it is unique. it is for mongoose/mongo to make performance optimizations
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
