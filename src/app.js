const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const invitation = require("./routes/invitation.router")
const cors = require('cors');
const cluster = require('cluster');
const os = require('os');
const { send, sendAdmin } = require("./mailing/send");
const numCPUs = os.cpus().length;

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
const allowedOrigins = ['https://6660dc468bf5820084ec2e32--curious-peony-97fc00.netlify.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));



app.use("/invitation" , invitation ) 





app.listen( PORT , ()=>{
   

    console.log(`Server runing on port ${PORT}`)
})
}