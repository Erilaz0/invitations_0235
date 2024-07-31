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
/*
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

 
  for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Restarting...`);
      cluster.fork();
  });
} else {
  console.log("Not cluster.isMaster")
}
*/


const PORT = process.env.PORT
const origin = process.env.ORIGIN
console.log(`ORIGIN: ${ origin }`)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.use(cors({
  origin:[ origin ],
 credentials: true
}));
app.engine("handlebars", handleBars.engine())
app.set("views", __dirname + "/views");
app.set("view engine","handlebars")

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use("/api/users" , users ) 
app.use("/api/invitation" , invitation ) 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', origin );
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});





app.listen( PORT , ()=>{
   

    console.log(`Server runing on port ${PORT}`)
})

const MONGO_URL = process.env.MONGO_URL
mongoose.connect( MONGO_URL )
 .then( ()=>{ console.log( "database connected" ) } )
 .catch( ( error )=> { console.log( error ) } )

