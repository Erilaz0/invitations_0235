const userServices = require("../services/users.service")
const bcrypt = require("bcrypt")
const { generaJWT , generaAdminJWT } = require("../jwt/generaJwt") 
const { jwtVerify } = require("../jwt/jwtVerify")
const { isValidObjectId, default: mongoose } = require("mongoose")
const user_admin = process.env.user_admin 
const password_admin = process.env.password_admin 




const createUser = async ( req , res )=>{
    const user = req.body.user
    const email = req.body.email
    const get_password = req.body.password
    const model = req.body.model
    const price = req.body.price
    const names = req.body.names

    try{


    const password = await bcrypt.hash( get_password , 10 )
    

  
    if( model === "pumpink" || model === "white" || model === "rose"){

      const event_address = req.body.event_address
      const party_address = req.body.party_address
      const event_text = req.body.event_text
      const party_text = req.body.party_text
      const account_text = req.body.account_text
      const dress_code = req.body.dress_code
      const bar = req.body.bar
      const kids = req.body.kids
      const date = req.body.date
      const imagen1 = req.body.imagen1
      const imagen2 = req.body.imagen2
      const imagen3 = req.body.imagen3
      const imagen4 = req.body.imagen4
      const music = req.body.music
      const names_font = req.body.names_font
      const message = req.body.message

      const images = {
        imagen1,
        imagen2,
        imagen3,
        imagen4
      }


      if ( user && typeof user === "string" && password && typeof password === "string" &&  email && typeof email === "string"  ){

        const create_User = await userServices.createUserPrime( user , email , password , message , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , date , kids , names_font )
        if( create_User.user && create_User.email && create_User.password && create_User._id ){
           res.status(200).json( { message : "User created successfully" } )
        }
        else{
           res.status(400).json( { error : "Cannot create user" } )
        }
     }
     else{
         res.status(400).json( { error : "Try with a valid typeof value field"} )
     }
    }
    else if( model === "goldenPlus" || model === "gardenPlus" ){

      const event_address = req.body.event_address
      const party_address = req.body.party_address
      const event_text = req.body.event_text
      const party_text = req.body.party_text
      const account_text = req.body.account_text
      const dress_code = req.body.dress_code
      const bar = req.body.bar
      const kids = req.body.kids
      const date = req.body.date
      const imagen1 = req.body.imagen1
      const imagen2 = req.body.imagen2
      const imagen3 = req.body.imagen3
      const imagen4 = req.body.imagen4
      const imagen5 = req.body.imagen5
      const imagen6 = req.body.imagen6
      const imagen7 = req.body.imagen7
      const music = req.body.music
      const names = req.body.names

      const images = {
        imagen1,
        imagen2,
        imagen3,
        imagen4,
        imagen5,
        imagen6,
        imagen7
      }


      if ( user && typeof user === "string" && password && typeof password === "string" &&  email && typeof email === "string"  ){

        const create_User = await userServices.createUserGG( user , email , password , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text , dress_code , bar , date , kids )
        if( create_User.user && create_User.email && create_User.password && create_User._id ){
           res.status(200).json( { message : "User created successfully" } )
        }
        else{
           res.status(400).json( { error : "Cannot create user" } )
        }
     }
     else{
         res.status(400).json( { error : "Try with a valid typeof value field"} )
     }
    }
    else if( model === "modern" ){
      const event_theme = req.body.event_theme
      const event_address = req.body.event_address
      const party_address = req.body.party_address
      const event_text = req.body.event_text
      const party_text = req.body.party_text
      const account_text = req.body.account_text
      const dress_code = req.body.dress_code
      const bar = req.body.bar
      const kids = req.body.kids
      const date = req.body.date
      const imagen1 = req.body.imagen1
      const imagen2 = req.body.imagen2
      const music = req.body.music
      

      const images = {
        imagen1,
        imagen2
      }

      if( user && typeof user === "string" && password && typeof password === "string" &&  email && typeof email === "string"  ){

        const create_User = await userServices.createModern( user , email , password , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text , dress_code , bar , date , kids , event_theme )
        if( create_User.user && create_User.email && create_User.password && create_User._id ){
           res.status(200).json( { message : "User created successfully" } )
        }
        else{
           res.status(400).json( { error : "Cannot create user" } )
        }
      }
      else{
         res.status(400).json( { error : "Try with a valid typeof value field"} )
      }
      
    }
    else if( model === "babyShower"){
      const event_address = req.body.event_address
      const account_text = req.body.account_text
      const gender = req.body.gender
      const imagen1 = req.body.imagen1
      const imagen2 = req.body.imagen2
      const imagen3 = req.body.imagen3
      const imagen4 = req.body.imagen4
      const date = req.body.date
      const text1 = req.body.text1
      const text2 = req.body.text2
      const text3 = req.body.text3
      const text4 = req.body.text4
      const text5 = req.body.text5
      const music = req.body.music
 
      const images = {
        imagen1,
        imagen2,
        imagen3,
        imagen4
      }
      const all_text = {
        text1,
        text2,
        text3,
        text4,
        text5,
      }

      if ( user && typeof user === "string" && password && typeof password === "string" &&  email && typeof email === "string"  ){

        const create_User = await userServices.createUserSecundary( user , email , password , music , model , price , names , images , event_address , account_text , date , all_text , gender )
        if( create_User.user && create_User.email && create_User.password && create_User._id ){
           res.status(200).json( { message : "User created successfully" } )
        }
        else{
           res.status(400).json( { error : "Cannot create user" } )
        }
      }
      else{
         res.status(400).json( { error : "Try with a valid typeof value field"} )
      }
    }
  }
  catch( error ){
    console.log( error )
  }
}



const createUserUI = async ( req , res )=>{
    res.status(200).render("createuser")
}


const deleteUser = async ( req , res )=>{
 const id = req.params.uid
 
 if( !mongoose.isValidObjectId( id ) ){
  res.status( 400 ).json( { error : "NOT VALID OBJECT ID" } )
 }
 else{
  const user = await userServices.findUser( id )
  if( !user ){
    res.status( 400 ).json( { error : "USER NOT FOUND" } )
  }
  else{
    const deleteUser = await userServices.deleteUser( id )
    if( !deleteUser ){
      res.status( 400 ).json( { error : "CANNOT DELETE USER" } )
    }
    else{
      res.status( 200 ).json( { message : "USER DELETED" } )
    }
  }
 }
 
}


const getAll_Users = async ( req , res )=>{
  const get_the_users = await userServices.getUsers()
  if( !get_the_users ){
    res.status( 400 ).json( { error : "CANNOT GET USERS" } )
  }
  else{
    const users =  JSON.parse(JSON.stringify(get_the_users))
    if( !users ){
      res.status( 400 ).json( { error : "CANNOT PARSE JSON USERS" } )
    }
    else{
      res.status( 200 ).render("users",{
        users : users
      }
     )
    }
  }
  
 
} 




const login_user = async ( req , res )=>{

    const user = req.body.user
    const password = req.body.password
    const email = req.body.email


    if ( user && password && email ){
      const get_credentials = await userServices.getUserCredentials( user , email )
      if( get_credentials ){
        const verify_password = await bcrypt.compare( password , get_credentials.password )
        if( verify_password ){
    
            const guests_data = {
              user : user,
              email : email,
            }
            const cookie_content = generaJWT( guests_data )
            const expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            
            res.cookie( "host_cookie" , cookie_content , {
                 httpOnly : true,
                 secure: true, 
                 sameSite: 'None',
                 expires: expireDate    
            } )
            res.status( 200 ).json( { message : "200OK" } )
        }
        else{
          res.status( 500 ).json( { error : "Invalid password" })
        }
      }
      else{
        res.status( 500 ).json( { error : "Credentials not match with our records" })
      }
    }
    else{
      res.status( 500 ).json( { error : "Credentials not match with our records" })
    }
}




const addGuest_tables = async ( req , res )=>{

  const user = req.body.user
  const table_name = req.body.table_name
  const table = req.body.table_name
  const email = req.body.email

  if( user , table_name , email ){
   const findGuest = await userServices.findGuest( user , email)
   const find_Table = await userServices.findTable( user , table_name )
   if( !findGuest && !find_Table ){
    res.status( 400 ).json( { error : "Guest Or Table Doesn´t exists" })
   }
   else{
      const changeTable = await userServices.changeGuestTable( user , email , table )
      if( !changeTable ){
        res.status( 400 ).json( { error : "Cannot change table porperty" })
      }
      else{
        res.status( 200 ).json( { message : "200OK" })
      }
    }  
  }
  else{
    res.status( 400 ).json( { error : "Invalid data" })
  }
}


const delete_Table = async ( req , res )=>{

  const user = req.body.user
  const table_name = req.body.table_name
  
  if( user && table_name && typeof table_name === "number" ){
    const removeTable = await userServices.deleteTable( user , table_name )
    if( removeTable.modifiedCount ){
      res.status( 200 ).json( { message : "200OK" } )       
    }
    else{
      res.status( 400 ).json( { error : "Error Removing Table" }) 
    }
  }
  else{
    res.status( 400 ).json( { error : "Invalid data" })
  }

}



const addTable = async ( req , res )=>{
  const user = req.body.user
  const table_name = req.body.table_name

  if( user && typeof table_name === "number" ){
    const find_Table = await userServices.findTable( user , table_name )
    if( find_Table ){
      res.status( 400 ).json( { table_exist : "This table already exists" })
    }
    else{
      const add = await userServices.createTable( user , table_name )
      if( !add ){
        res.status( 400 ).json( { error : "Invalid data" })
      }
      else{
        res.status( 200 ).json( { message : "200OK" })
      }
    }
  }
  else{
    res.status( 400 ).json( { error : "El Nombre de la mesa tiene q ser un numero." })
  }
}






const get_guests_data = async ( req , res )=>{

  const host = req.cookies.host_cookie
  if( host ){
    const verify = await jwtVerify( host )
    if( verify ){
      const { secret } = verify
      const user = secret.user
      const email = secret.email
      if( !user && !email){
        res.status( 400 ).json( { Unauthorized : "Not secret Data" } )
      }
      else{
       const verify_host = await userServices.verifyHost( user , email )
       if( !verify_host ){
         res.status( 401 ).json( { error : "Unauthorized" } )
       }
       else{

        res.status( 200 ).json( { message : "200OK" , id : verify_host._id , data : verify_host.guests , tables : verify_host.guestTable } )
       }
      }
    }
    else{
      res.status( 401 ).json( { error : "Unauthorized" } )
    }
  }
  else{
    res.status( 401 ).json( { error : "Unauthorized" } )
  }
}


const admin_login_UI = async ( req, res )=>{

  res.status( 200 ).render("admin")
}

const admin_login = async ( req, res )=>{
  try{
    const user = req.body.user
    const password = req.body.password
    const user_validation =  user && user === user_admin && typeof user === "string" 
    const password_validation =  password && password === password_admin && typeof password === "string" 
    if( user_validation && password_validation ){

      const encrypted_user = await bcrypt.hash( user , 10 )
      const cookie_content = generaAdminJWT( encrypted_user )
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);

      res.cookie( "admin_cookie" , cookie_content , {
           httpOnly : true,
           secure: true, 
           sameSite: 'None',
           expires: expireDate    
      } )
      res.status( 200 ).redirect("/api/users/createui")
    }
    else{
      res.status( 400 ).json( { error : "Invalid Credentials" } )

    }
  }
  catch( error ){
    res.status( 400 ).json( { error : "Cannot read data" } )
  }
}


const deleteGuest = async ( req , res )=>{

  const user = req.body.user
  const email = req.body.email

  if( user && mongoose.isValidObjectId( user ) && email.includes("@") ){
    const deleteSelectedGuest = await userServices.deleteGuest( user , email )
    if( !deleteSelectedGuest ){
      res.status( 400 ).json( { error : "Cannot delete guest" } )
    }
    else{
      res.status( 200 ).json( { message : "200OK" } )
    }
  }
}


const viewGuide = async ( req , res )=>{

      res.status( 200 ).render("guide")
}


module.exports = { deleteGuest , viewGuide , deleteUser , getAll_Users , admin_login_UI , delete_Table , admin_login , createUser , addGuest_tables , addTable , createUserUI , login_user , get_guests_data }