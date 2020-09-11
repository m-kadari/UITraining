class User{

    constructor(){

        this.firstName = "Madhumitha";

        this.lastName = "Kadari";    

    }

    firstName;// = "Madhumitha";

    lastName;// = "Kadari";

    getFullName(){

        return this.firstName + " " + this.lastName;

    }

}



//No multiple inheritance in JS

class Student extends User{

    constructor(){

        super(); //super in JS in MANDATORY!

        
    }

    userName = "Pravalika";

}



console.log(new Student());