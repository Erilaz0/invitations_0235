const bcrypt = require("bcrypt")
const generaJWT = require("../jwt/generaJwt") 
const key03 = "F3sT8JN08Nb8vZX3cQr6nk,kl9jnjj7YBH88"

const getToken = async ( req , res )=>{
    try{
       

            const hash = await bcrypt.hash( "F3sT8JN08Nb8vZX3cQr6nk,kl9jnjj7YBH88" , 12 )
            const key00 = generaJWT( hash )
            res.cookie( "4eb12nsb433nsh1ma7SHD7nsia8" , key00 , {
                 httpOnly : false ,
                 secure: true, // Asegúrate de que esta opción sea true en producción si usas HTTPS
                 sameSite: 'None'    
            } )
            res.status( 200 ).json( {  message : "success"} )
    
        
    }
    catch( error ){
        res.status(400).json( { error : error } )
    }    
}

module.exports = getToken 