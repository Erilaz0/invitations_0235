const Router = require("express").Router
const router = Router()
const { admin_login_UI , viewGuide , deleteUser , delete_Table , getAll_Users , deleteGuest , addGuest_tables , addTable , admin_login , createUser , get_guests_data , createUserUI , login_user } = require("../controllers/users")
const  { adminVerify , hostVerify }  = require("../middlewares/verifyMiddleware")

router.post( "/create" , adminVerify , createUser )

router.get( "/createui" ,  adminVerify , createUserUI )

router.get( "/guide" , viewGuide )

router.get("/allusers" , adminVerify , getAll_Users )

router.get( "/user-guest" , hostVerify , get_guests_data )

router.get("/admin-login-ui" , admin_login_UI )

router.post("/admin-login" , admin_login )

router.post( "/user-login" , login_user )

router.post( "/addGuestTable" , hostVerify , addGuest_tables )

router.post( "/addTable" , hostVerify , addTable )

router.delete( "/deleteGuest" , hostVerify , deleteGuest )

router.delete( "/deleteTable" , hostVerify , delete_Table )

router.delete( "/deleteUser/:uid" , adminVerify , deleteUser )




module.exports = router