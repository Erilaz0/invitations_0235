const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const mongoose = require('mongoose');
const path = require('path');

const invitation = require("./routes/invitation.router.js")
const users = require("../src/routes/users.router.js")

const cors = require('cors');
const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;
const handleBars = require("express-handlebars")



const PORT = process.env.PORT || 8888
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use(cors({
  origin:[ "https://greenlazcard.netlify.app" ],
  credentials: true
}));
app.engine("handlebars", handleBars.engine())
app.set("views", __dirname + "/views");
app.set("view engine","handlebars")


app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use("/api/users" , users ) 
app.use("/api/invitation" , invitation ) 





app.listen( PORT , ()=>{
   

    console.log(`Server runing on port ${PORT}`)
})

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://diego:QLBN9OVLBgbTPMrp@cluster0.8pnmvnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect( MONGO_URL )
 .then( ()=>{ console.log( "database connected" ) } )
 .catch( ( error )=> { console.log( error ) } )

