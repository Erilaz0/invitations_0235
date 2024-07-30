const bcrypt = require("bcrypt")    
const { jwtAdminVerify , jwtVerify } = require("../jwt/jwtVerify")
const user_admin = process.env.user_admin


    const adminVerify = async ( req , res , next )=>{
        const token = req.cookies.admin_cookie
        if( !token ){
            res.status(400).redirect("/api/users/admin-login-ui")
        }
        else{
            try{
            const verify = await jwtAdminVerify( token )
            if( verify && verify.secret ){
             const compare_codeUser = await bcrypt.compare( user_admin , verify.secret )
             if( !compare_codeUser ){
                res.status(400).redirect("/api/users/admin-login-ui")
             }
             else{
                next()
             }
            }
            else{
             res.status(400).redirect("/api/users/admin-login-ui")
            }
         }
         catch( error ){
           res.status( 400 ).redirect( "/api/users/admin-login-ui" )
         }
       }
    }


    const hostVerify = async ( req , res , next )=>{
      const token = req.cookies.host_cookie
      if( !token ){
          res.status(400).json( { error : "Not host cookie" } )
      }
      else{
          try{
          const verify = await jwtVerify( token )
          if( verify && verify.secret ){
            next()
          }
          else{
            res.status(400).json( { error : "Invalid Token" } )
          }
       }
       catch( error ){
        res.status(400).json( { error : "Invalid Token" } )
       }
     }
  }

module.exports = { adminVerify , hostVerify }

