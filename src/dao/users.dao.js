const daoModel = require("./models/users.models")

class UsersDao{

    constructor(){}

    async createUserPrime( user , email , password , music , model , price , names , invitation_url , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , party , date , kids , event_theme ){
        return await daoModel.create( { user , email , password , music , model , price , names , invitation_url , images, event_address , party_address , party_text , event_text , account_text , dress_code , bar , party , date , kids , event_theme } )
    }
    
    async createUserSecundary( user , email , password , model , music  , price , names , invitation_url , images , event_address , account_text , date , all_text , gender ){
        return await daoModel.create( { user , email , password , music , model , price , names , invitation_url , images, event_address , account_text , date , all_text , gender } )
    }

    async addGuest( diet , music , email , attendance , user , name ){
        return await daoModel.updateOne( { _id : user } , { $push : { guests : [ { diet : diet , music : music , email : email , attendance : attendance , name : name  } ] } } )
    } 

    async verifyUser( user , password ){
        return await daoModel.findOne( { user : user , password : password } )
    }

    async verifyHost( user , email ){
        return await daoModel.findOne( { user : user , email : email } )
    }

    async getCardById( iid ){
        return await daoModel.findOne( { _id : iid } , { guests : 0 , user : 0 , email : 0 , password : 0 } )
    }
}

module.exports = UsersDao