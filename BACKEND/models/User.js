const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profileImgUrl: { type: String, default: null },
        role: { type: String, enum: ["admin", "member"], default: "memner" },

    },
    { timestamps: true }
)

module.export = mongoose.model("User", UserSchema)