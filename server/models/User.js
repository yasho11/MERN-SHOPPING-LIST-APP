const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, reuqired: true, unique: ture},
    password: {type: String, required: true},
});

UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

module.exports = mongoose.model("User" , UserSchema);
