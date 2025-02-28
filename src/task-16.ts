// Generic
class NewUser<T>{
    public user: T;
    constructor(user: T){
        this.user = user;
    }
}

const userRodrigo = new NewUser<string>("Rodrigo Sousa Luz");

console.log(userRodrigo);