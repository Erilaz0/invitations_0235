const jwt = require("jsonwebtoken") 
const key01 = process.env.key01 || "5233ed244dfASSmjsjn7ha..JSD8AJ9dn1sj10"


const generaJWT = ( secret )=>  jwt.sign( { secret } , key01 ) 

module.exports = generaJWT