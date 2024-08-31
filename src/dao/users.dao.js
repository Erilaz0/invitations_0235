const daoModel = require("./models/users.models")

class UsersDao{

    constructor(){}

    async createUserPrime( user , email , password , message , music , model , price , names , invitation_url , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , party , date , kids , event_theme , names_font , event_theme_font ){
        return await daoModel.create( { user , email , message , password , music , model , price , names , invitation_url , images, event_address , party_address , party_text , event_text , account_text , dress_code , bar , party , date , kids , event_theme , names_font , event_theme_font } )
    }
    
    async createUserSecundary( user , email , password , model , music  , price , names , invitation_url , images , event_address , account_text , date , all_text , gender ){
        return await daoModel.create( { user , email , password , music , model , price , names , invitation_url , images, event_address , account_text , date , all_text , gender } )
    }

    async addGuest( diet , music , email , attendance , user , name ){
        return await daoModel.updateOne( { _id : user } , { $push : { guests : [ { diet : diet , music : music , email : email , attendance : attendance , name : name  } ] } } )
    } 

    async findTable( user , table_name ){
        return await daoModel.findOne( { _id : user ,  guestTable : {  $elemMatch : { table_name : table_name } } } )
    }

    async addGuestToTable( user , table_name , name , diet , email ){
        return await daoModel.updateOne( { _id : user , "guestTable.table_name" : table_name } , { $push : { "guestTable.$.guests" : { name : name , diet : diet , email : email } } } )
    } 
    
    async createTable( user , table_name ){
        return await daoModel.updateOne( { _id : user } , { $push : { guestTable : { table_name : table_name , guests : [] } } } )
    }

    async findGuest( user , email ){
        return await daoModel.findOne( { _id : user , "guests.email" : email })
    }

    async deleteGuest( user , email ){
        return await daoModel.updateOne( { _id : user } , { $pull : { guests : { email : email } } } )
    }

    async deleteTable( user , table_name ){
        return await daoModel.updateOne( { _id : user } , { $pull : { guestTable : { table_name : table_name } } } )
    }

    async changeGuestTable( user , email , table ){
        return await daoModel.updateOne( { _id : user , guests : { $elemMatch : { email : email } } } , { $set : { "guests.$.table" : table } } )
    }

    async verifyUser( user , password ){
        return await daoModel.findOne( { user : user , password : password } )
    }

    async getUserCredentials( user , email ){
        return await daoModel.findOne( { user : user , email : email } )
    }

    async verifyHost( user , email ){
        return await daoModel.findOne( { user : user , email : email } )
    }

    async getCardById( iid ){
        return await daoModel.findOne( { _id : iid } , { guests : 0 , user : 0 , email : 0 , password : 0 } )
    }
}

module.exports = UsersDao