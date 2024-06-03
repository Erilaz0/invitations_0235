const jwt = require("jsonwebtoken")
const generaJWT = require("../jwt/generaJwt")
const key01 = process.env.key00 || "5233ed244dfASSmjsjn7ha..JSD8AJ9dn1sj10" //el secret q tiene q estar en el header pero codificado con jwt y con bcrypt
const bcrypt = require("bcrypt")



const jwtVerify = ( req , res , next )=>{

    const token = req.cookies["4eb12nsb433nsh1ma7SHD7nsia8"]

    
    jwt.verify( token , key01 , ( error , credentials )=>{

        if( credentials ){
            console.log( credentials )
            console.log("yay")
            return
        }
        else if( error ){
            console.log( error )
            return
        }
        else{
            console.log("error")
            return
        }
        next()

    })
}
module.exports = jwtVerify