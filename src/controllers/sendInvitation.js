const { default : mongoose } = require("mongoose");
const usersServices = require("../services/users.service");
const bcrypt = require("bcrypt")



async function addGuestInformation( req , res ){

    const body = req.body
    const email = body.email
    const name = body.name
    const music = body.music
    const attendance = body.attendance
    const diet = body.diet
    const user = body.user

    
    const first_verify = typeof email === "string" && email.includes("@")&& typeof name === "string"
    const dietVerify = typeof diet === "string" 
    const userVerify = typeof user === "string" 
    const musicVerify =  typeof music === "string" 
    const attendanceVerify = typeof attendance === "string" && ( attendance === "Sí" || attendance === "No" )
    const verify = email && name && diet && music && attendance && first_verify 
    const secondVerify = dietVerify && musicVerify && attendanceVerify && userVerify

   try{
     const verifyGuest = await usersServices.findGuest( user , email )
     if( !verifyGuest ){
        if( verify && secondVerify ){
            const add_Guest = await usersServices.addGuest( diet , music , email , attendance , user , name ) 
            if( add_Guest ){
              res.status( 200 ).json( { message : "200OK" } )
            }
            else{
              res.status( 400 ).json( { message : "Cannot add Guest" } )
            }
       }
       else{
        res.status(400).json( { error : "Error en la data del usuario" } )
       }
     }
     else{
        res.status(400).json( { email_error : "Este Email ya existe" } )
     }

   }
   catch(error){
        res.status(400).json( { error : "No es posible enviar la confirmacion, espera 5 minutos y vuelve a intentarlo 1" } )
   }
 
}

async function getCard( req , res ){

    const iid = req.params.iid
    if( iid && mongoose.isValidObjectId( iid ) ){

        const cardByIID = await usersServices.getCardById( iid )
        if( cardByIID ){
            res.status( 200 ).json( { message : "200OK" , card : cardByIID } )
        }
        else{
            res.status( 400 ).json( { error : `IID: ${ iid } doesn´t exists` } )
        }
    }
    else{
        res.status( 400 ).json( { error : "Try with a valid object iid" } )
    }
}

module.exports = { getCard , addGuestInformation }