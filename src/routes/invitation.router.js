const Router = require("express").Router
const router = Router()
const getInvitation = require("../controllers/sendInvitation")
const getToken = require("../controllers/getToken")
const verifyMiddleware = require("../middlewares/verifyMiddleware")
const home = require("../controllers/home")

router.get( "/getToken" , getToken )

router.get( "/home" , home )

router.post( "/send-invitation" , verifyMiddleware , getInvitation )





module.exports = router