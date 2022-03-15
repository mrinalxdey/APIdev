const {dbCon} = require('../configuration');
const {userValidator} = require('../validator');

class User {
    constructor(userData) {
        this.userData = {...userData};
    };
    save() {
        dbCon('users',async(db)=>{
            await db.insertOne(this.userData);
        });
    }
    static validate(userData) {
        return userValidator.validate(userData);
    };
};

const userData = {
    username: 'mrinalDey',
    email: 'mrinaldeyyyy@example.com',
    password: 'Sumon-2002',
    first_name: 'Mrinal',
    last_name: 'Dey'
};

User.validate(userData);