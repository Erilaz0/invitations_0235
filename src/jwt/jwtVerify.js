const jwt = require("jsonwebtoken")
const key01 = process.env.key01 
const keyAdmin = process.env.keyAdmin 




const jwtVerify = async ( token )=>{

    if( token ){
            return new Promise((resolve, reject) => {
                jwt.verify( token , key01 , ( error , credentials )=>{
                  if( error ){
                    reject( error )
                  }
                  else{
                    resolve( credentials )
                  }
                })
            })
    }
    else{
      throw new Error("Invalid Cookie")
    }
    }



const jwtAdminVerify = async ( token )=>{

    if( token ){

            return new Promise((resolve, reject) => {
                jwt.verify( token , keyAdmin , ( error , credentials )=>{
                  if( error ){
                    reject( "Invalid Token" )
                  }
                  else{
                    resolve( credentials )
                  }
                })
            })
    }
    else{
         throw new Error("Invalid Cookie")
    }
    }
   
   
    

module.exports = { jwtVerify , jwtAdminVerify }