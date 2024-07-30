const Router = require("express").Router
const router = Router()
const { addGuestInformation , getCard } = require("../controllers/sendInvitation")
const { addMusic , addMusicUI } = require("../controllers/multer")
const { adminVerify } = require("../middlewares/verifyMiddleware")
const home = require("../controllers/home")


router.get( "/home" , home )

router.get( "/get-card/:iid" , getCard )

router.post( "/send-invitation" , addGuestInformation )

router.get("/music/addui" , adminVerify , addMusicUI )

router.post("/music/add" , adminVerify , addMusic )





module.exports = router