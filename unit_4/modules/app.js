class User {
  constructor (name) {
    this.name = name;
  }
  sayHello(){
    console.log(this.name + "helo");
  }
}

const alex = new User('Alex');
console.log(alex);