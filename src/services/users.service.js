const UsersDao = require("../dao/users.dao")

class UsersServices{

    constructor( dao ){
        this.dao = dao
    }

   
    async createUserPrime( user , email , password , music , model , price , names , invitation_url , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , party , date, kids , event_theme ){
      return await this.dao.createUserPrime( user , email , password , music , model , price , names , invitation_url , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , party , date , kids , event_theme )
    }

    async createUserSecundary( user , email , password , music , model , price , names , invitation_url , images , event_address , account_text , date , all_text , gender ){
      return await this.dao.createUserSecundary( user , email , password , music , model , price , names , invitation_url , images, event_address , account_text , date , all_text , gender )
    }

    async addGuest( diet , music , email , attendance , user , name ){
      return await this.dao.addGuest( diet, music , email , attendance , user , name )
    }

    async verifyUser( user , password ){
      return await this.dao.verifyUser( user , password )
    }

    async verifyHost( user , email ){
      return await this.dao.verifyHost( user , email )
  }

    async getCardById( iid ){
      return await this.dao.getCardById( iid )
    }
}

const usersDao = new UsersDao()
const usersServices = new UsersServices( usersDao )

module.exports = usersServices