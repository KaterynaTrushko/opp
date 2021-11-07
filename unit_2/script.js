let a = {
  "text": "Hello",
  "color": "red",
  "bold": true,
  "show": function (){
    console.log(this.color);
  }
};

let b = {
 
  "fontSize": "24px",
  __proto__: a
}

console.log(a);

b.show();
b.color = "green";
b.show();

let c = {
  "fontFamily":  "Verdana",
  __proto__: b
}

console.log(c.bold);

// a-> b -> c круговые зависимости- ошибка

console.log(c.hasOwnProperty("color"));


//forma of login

let user = {
  "login": "",
  "password": "",
  "validatePassword": function (){
    if(this.password.length > 6){
      return true;
    } else {
      return false;
    }
  }
}