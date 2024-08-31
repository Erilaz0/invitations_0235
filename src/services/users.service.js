const UsersDao = require("../dao/users.dao")

class UsersServices{

    constructor( dao ){
        this.dao = dao
    }

   
    async createUserPrime( user , email , password , music , model , price , names , invitation_url , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , party , date, kids , event_theme , names_font , event_theme_font ){
      return await this.dao.createUserPrime( user , email , password , music , model , price , names , invitation_url , images , event_address , party_address , party_text , event_text , account_text ,  dress_code , bar , party , date , kids , event_theme , names_font , event_theme_font )
    }

    async createUserSecundary( user , email , password , music , model , price , names , invitation_url , images , event_address , account_text , date , all_text , gender ){
      return await this.dao.createUserSecundary( user , email , password , music , model , price , names , invitation_url , images, event_address , account_text , date , all_text , gender )
    }

    async addGuest( diet , music , email , attendance , user , name ){
      return await this.dao.addGuest( diet, music , email , attendance , user , name )
    }

    async addGuestToTable( user , table_name , name , diet , email ){
      return await this.dao.addGuestToTable( user , table_name , name , diet , email)
    } 

    async deleteGuest( user , email ){
      return await this.dao.deleteGuest( user , email )
    }

    async deleteTable( user , table_name ){
      return await this.dao.deleteTable( user , table_name )
    }

    async deleteGuestFromTable( user , table_name , name , diet , email ){
      return await this.dao.deleteGuestFromTable( user , table_name , name , diet , email )
    } 

    async findTable( user , table_name ){
      return await this.dao.findTable( user , table_name )
    }

    async createTable( user , table_name ){
      return await this.dao.createTable( user , table_name )
    }

    async findGuest( user , email ){
      return await this.dao.findGuest( user , email )
    }

    async changeGuestTable( user , email , table ){
      return await this.dao.changeGuestTable( user , email , table )
    }

    async verifyUser( user , password ){
      return await this.dao.verifyUser( user , password )
    }

    async getUserCredentials( user , email ){
      return await this.dao.getUserCredentials( user , email )
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