const jwt = require("jsonwebtoken");
const User = require("../models/User");


//Midleware to ptotect routes

const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token && token.startsWith("Bearer")) {
            token = token.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-pasword");
            next()
        } else {
            res.status(401).json({ message: "Not authorized,no token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Token failed", error: error.message })
    }
}


//Midleware for Admin-only access

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Acess denied, admin only" })
    }
}

module.exports = { protect, adminOnly }