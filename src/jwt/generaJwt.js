const jwt = require("jsonwebtoken") 
const key01 = process.env.key01 
const keyAdmin = process.env.keyAdmin 

const generaJWT = ( secret )=>  jwt.sign( { secret } , key01 ) 

const generaAdminJWT = ( secret )=>  jwt.sign( { secret } , keyAdmin ) 


module.exports = { generaJWT , generaAdminJWT }