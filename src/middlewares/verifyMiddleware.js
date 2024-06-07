const jwt = require("jsonwebtoken")
const generaJWT = require("../jwt/generaJwt")
const key01 = process.env.key00 || "5233ed244dfASSmjsjn7ha..JSD8AJ9dn1sj10" //el secret q tiene q estar en el header pero codificado con jwt y con bcrypt
const key03 = process.env.key03 || "F3sT8JN08Nb8vZX3cQr6nk,kl9jnjj7YBH88"
const bcrypt = require("bcrypt")    



    const jwtVerify = ( req , res , next )=>{
    
        const token = req.cookies["4eb12nsb433nsh1ma7SHD7nsia8"]
        jwt.verify( token , key01 , async ( error , credentials )=>{
    
            if( credentials ){
            console.log("credenciales machean")
             
                const secret = credentials.secret 
                const final_verification = await bcrypt.compare( key03 , secret )
                if( final_verification ){
                    console.log("credenciales bcrypu machean tambien")
                    next()
                }
                else{
                console.log("credenciale 2 sno machean")

                    res.status( 400 ).json( { error : error } )
                }
               
            }
            else if( error ){
            console.log("credenciales no machean")
   
                res.status( 400 ).json( { error : error } )
            }
            else{
                res.status( 400 ).json( { error : "Cannot validate token" } )
            }
          
    
        })
    }
    module.exports = jwtVerify

