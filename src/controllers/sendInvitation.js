const { send , sendAnfitrion } = require("../mailing/send")



async function getInvitation( req , res ){

    const body = req.body
    const email = body.email
    const invitationURL = body.invitationURL 
    const name = body.name
    const diabetic = body.diabetic
    const celiac = body.celiac
    const music = body.music
    const attendance = body.attendance
    const vegan = body.vegan 
    const anfitrionEmail = body.anfitrionEmail
    
    const first_verify = typeof email === "string" && email.includes("@")&& typeof invitationURL === "string" &&  typeof name === "string"
    const diabeticVerify = typeof diabetic === "string" && ( diabetic === "Sí" || diabetic === "No" ) 
    const musicVerify =  typeof music === "string" 
    const celiacVerify =  typeof celiac === "string" && ( celiac === "Sí" || celiac === "No" )
    const veganVerify = typeof vegan === "string" && ( vegan === "Sí" || vegan === "No" )
    const anfitrionEmailVerify = typeof anfitrionEmail === "string" 
    const attendanceVerify = typeof attendance === "string" && ( attendance === "Sí" || attendance === "No" )
    const verify = email && invitationURL && name && diabetic && celiac && music && attendance && vegan && anfitrionEmail && first_verify 
    const secondVerify = diabeticVerify && musicVerify && celiacVerify && veganVerify && anfitrionEmailVerify && attendanceVerify
   try{

    if( verify && secondVerify ){

        await sendAnfitrion( anfitrionEmail , name , diabetic , celiac , music , attendance , vegan )
        .then( async ()=>{
            
            await send( email , invitationURL )
            .then(( response )=>{ 
                res.status(200).json( { message : "success, all invitations have been sent" } )
            })
            .catch(( error )=>{
                 res.status(400).json( { error : "cannot send invitation" } )
                })
        })
        .catch((error)=>{
           res.status(400).json( { error : error } )
        })
       
        
       }
       else{
        console.log("espera5 min 2")
        res.status(400).json( { error : "No es posible enviar la confirmacion, espera 5 minutos y vuelve a intentarlo 2" } )
       }
   }
   catch(error){
    console.log("espera5 min 1")

        res.status(400).json( { error : "No es posible enviar la confirmacion, espera 5 minutos y vuelve a intentarlo 1" } )
   }

 
   


    

}

module.exports = getInvitation