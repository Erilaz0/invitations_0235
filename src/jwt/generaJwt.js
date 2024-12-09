const jwt = require("jsonwebtoken") 
const key01 = process.env.key01  || "32324"
const keyAdmin = process.env.keyAdmin || "121212"

const generaJWT = ( secret )=>  jwt.sign( { secret } , key01 ) 

const generaAdminJWT = ( secret )=>  jwt.sign( { secret } , keyAdmin ) 


module.exports = { generaJWT , generaAdminJWT }