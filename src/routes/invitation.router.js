const Router = require("express").Router
const router = Router()
const getInvitation = require("../controllers/sendInvitation")
const getToken = require("../controllers/getToken")
const verifyMiddleware = require("../middlewares/verifyMiddleware")

router.get( "/getToken" , getToken )

router.post( "/send-invitation" , verifyMiddleware , getInvitation )



module.exports = router