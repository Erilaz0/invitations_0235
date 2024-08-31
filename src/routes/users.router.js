const Router = require("express").Router
const router = Router()
const { admin_login_UI , delete_Table , deleteGuest , addGuest_tables , addTable , admin_login , createUser , get_guests_data , createUserUI , login_user } = require("../controllers/users")
const  { adminVerify , hostVerify }  = require("../middlewares/verifyMiddleware")

router.post( "/create" , adminVerify , createUser )

router.get( "/createui" ,  adminVerify , createUserUI )

router.get( "/user-guest" , hostVerify , get_guests_data )

router.get("/admin-login-ui" , admin_login_UI )

router.post("/admin-login" , admin_login )

router.post( "/user-login" , login_user )

router.post( "/addGuestTable" , addGuest_tables )

router.post( "/addTable" , addTable )

router.delete( "/deleteGuest" , deleteGuest )

router.delete( "/deleteTable" , delete_Table )




module.exports = router