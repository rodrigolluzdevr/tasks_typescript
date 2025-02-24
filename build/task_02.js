"use strict";
class User {
    user;
    email;
    constructor(user, email) {
        this.user = user;
        this.email = email;
    }
}
let c1 = new User("Rodrigo Sousa Luz", "rodrigolluzdevr@gmail.com");
console.log(c1.user);
console.log(c1.email);
