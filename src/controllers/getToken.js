const bcrypt = require("bcrypt")
const generaJWT = require("../jwt/generaJwt") 
const key03 = "F3sT8JN08Nb8vZX3cQr6nk,kl9jnjj7YBH88"

const getToken = async ( req , res )=>{
    try{
        const cookie = req.cookies["4eb12nsb433nsh1ma7SHD7nsia8"]
        if( cookie ){

            const hash = await bcrypt.hash( "F3sT8JN08Nb8vZX3cQr6nk,kl9jnjj7YBH88" , 12 )
            const key00 = generaJWT( hash )
            res.cookie( "4eb12nsb433nsh1ma7SHD7nsia8" , key00 , { httpOnly : false } )
            res.status( 200 ).json( {  message : "success"} )
        }
        else{
            res.status( 400 ).json( {  message : "CANNOT SET COOKIE" } )
        }
        
    }
    catch( error ){
        res.status(400).json( { error : error } )
    }    
}

module.exports = getToken 