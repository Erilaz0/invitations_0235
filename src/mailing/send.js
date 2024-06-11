const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({

   service : "gmail", 
   port : 465 , 
   auth : {

     user : process.env.MAILING_EMAIL ,
     pass : process.env.MAILING_PASSWD

   },
   tls: {
    rejectUnauthorized: false, 
  },

})

const send = async( email , invitationURL ) => {

    return transporter.sendMail({
        
    from : "Erilaz <alonsoalonsl431432@gmail.com>",
    to : email ,
    subject : "¡Te Invitamosa  nuestra Boda!",
    html: `<img src=${ invitationURL }></img>`
  }
 )
}


const sendAdmin = async(  ) => {

  return transporter.sendMail({
      
  from : "Erilaz <alonsoalonsl431432@gmail.com>",
  to :  "pandemonio278@gmail.com",
  subject : "El server esta activo",
  html: `<p>yay prendio</p>`
}
)
}



const sendAnfitrion = async( anfitrionEmail , name , diabetic , celiac , music , attendance , vegan ) => {

  return transporter.sendMail({
      
  from : "Greenlaz email redirection <alonsoalonsl431432@gmail.com>",
  to : anfitrionEmail ,
  subject : `¡${name} ah respondido a tu invitacion!`,
  html: `
  <div>
  <p>Es vegan@: ${vegan}</p>
  <p>Es diabetic@?: ${diabetic}</p>
  <p>Es celiac@?: ${celiac}</p>
  <p>Su sugerencia musical: ${music}</p>
  <p>Vendra?: ${attendance}</p>
  </div>`
}
)
}

module.exports = { send , sendAnfitrion , sendAdmin }