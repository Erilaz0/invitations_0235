const daoModel = require("./models/users.models")

class UsersDao{
    
    constructor(){}

    async createUserPrime( user , email , password , message , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , date , kids , names_font ){
        return await daoModel.create( { user : user , email : email ,password : password , message : message, music : music , model : model , price : price , names : names , images : images , event_address : event_address , party_address : party_address , party_text : party_text, event_text: event_text , account_text : account_text , dress_code : dress_code , bar : bar , date : date, kids : kids , names_font : names_font } )
    }
    
    async createUserGG(user , email , password , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text , dress_code , bar , date , kids ){
        return await daoModel.create( { user , email , password , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text , dress_code , bar , date , kids  } )
    }

    async createModern( user , email , password , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text , dress_code , bar , date , kids , event_theme ){
        return await daoModel.create( { user , email , password , music , model , price , names , images , event_address , party_address , party_text , event_text , account_text , dress_code , bar , date , kids , event_theme } )
    }
    
    async createUserSecundary( user , email , password , music , model , price , names , images , event_address , account_text , date , all_text , gender ){
        return await daoModel.create( { user , email , password , music , model , price , names , images , event_address , account_text , date , all_text , gender } )
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

    async deleteUser( id ){
        return await daoModel.deleteOne( { _id : id } )
    }

    async findUser( id ){
        return await daoModel.findOne( { _id : id } )
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

    async getUsers(){
        return await daoModel.find({})
    }

    async getCardById( iid ){
        return await daoModel.findOne( { _id : iid } , { guests : 0 , user : 0 , email : 0 , password : 0 } )
    }
}

module.exports = UsersDao