class User{
    user : string
    email : string
    constructor(user:string, email:string){
        this.user = user;
        this.email = email;
    }
}
let c1 = new User("Rodrigo Sousa Luz", "rodrigolluzdevr@gmail.com")
console.log(c1.user)
console.log(c1.email)