class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this.name + "Hello");
    }
}

const alex = new User("Alex");
console.log(alex);
console.log(typeof User.constructor());

class Person extends User {
    constructor(name, email) {
        super(name);
        this.email = email;
    }
}

const victor = new User("Victor");