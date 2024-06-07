const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")


const invitation = require("./routes/invitation.router")

const cors = require('cors');
const cluster = require('cluster');
const os = require('os');
const { send, sendAdmin } = require("./mailing/send");
const numCPUs = os.cpus().length;
const handleBars = require("express-handlebars")


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Forka workers equivalentes al número de CPUs disponibles
  for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
  }

  // Maneja eventos cuando un worker se muere y crea uno nuevo
  cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Restarting...`);
      cluster.fork();
  });
} else {



const PORT = 8888
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.use(cors({
  origin:"https://6663493800616e07523c54ca--peppy-cuchufli-2dc86e.netlify.app/",
  credentials: true
}));
app.engine("handlebars", handleBars.engine())
app.set("views", __dirname + "/views");
app.set("view engine","handlebars")


app.use("/invitation" , invitation ) 
app.use("/",( req , res )=>{

  res.status( 200 ).render(`welcome`)
})




app.listen( PORT , ()=>{
   

    console.log(`Server runing on port ${PORT}`)
})
}
