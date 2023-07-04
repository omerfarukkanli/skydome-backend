const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports = {
    bycryptHash(password) {
        return bcrypt.hash(password, 10)
    },
    jwtSign({ username }) {
        const { secret } = require("../../config/index");
        return jwt.sign({ username }, secret)
    },
    passwordCompare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword)
    }
}
