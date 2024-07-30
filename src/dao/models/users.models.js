const mongoose = require("mongoose");


const usersCollection = "users";
const usersSchema = new mongoose.Schema({

    user : { type : String , required : true },
    email : { type : String , required : true },
    password : { type : String , required : true },
    event_theme : { type : String , required : true },
    last_connection : { type : String , required : false },
    model : { type : String , required : true },
    price : { type : String , required : true },
    names : { type : String , required : true },
    music : { type : String , required : true },
    invitation_url : { type : String },
    party_address : { type : String },
    event_address : { type : String },
    event_text : { type : String },
    party_text : { type : String },
    account_text : { type : String },
    dress_code : { type : String },
    bar : { type : String }, 
    party : { type : String },
    date : { type : String },
    kids : { type : String },
    gender : { type : String },
    all_text : {
        text1 : { type : String , required : false},
        text2 : { type : String , required : false},
        text3 : { type : String , required : false},
        text4 : { type : String , required : false},
        text5 : { type : String , required : false},
        text6 : { type : String , required : false},
    },
    images : {
        imagen1 : { type : String , required : false},
        imagen2 : { type : String , required : false},
        imagen3 : { type : String , required : false},
        imagen4 : { type : String , required : false},
        imagen5 : { type : String , required : false},
        imagen6 : { type : String , required : false},
        imagen7 : { type : String , required : false},
        imagen8 : { type : String , required : false},
        imagen9 : { type : String , required : false},
        imagen10 : { type : String , required : false},
        imagen11 : { type : String , required : false},
        imagen12 : { type : String , required : false},
        imagen13 : { type : String , required : false},
        imagen14 : { type : String , required : false},
        imagen15 : { type : String , required : false},
     },
    guests : [ { 
         name : { type : String , required : false } ,
         diet : { type : String , required : false } , 
         email : { type : String , required : false } ,
         music : { type : String , required : false } , 
         attendance : { type : String , required : false } 
        } ]
});


const usersModel = mongoose.model( usersCollection , usersSchema )

module.exports = usersModel