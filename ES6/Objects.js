//JS is obj based, not obj oriented lang.

//{} is called OBJECT creation!!!

//Dynamically can create properties of objext

var user = {};

user.name="Madhu";

user.age=21;

console.log(user);



/*

Ways to create an object:-

1) by using literals

2) by using new Object

*/

//1) by using literals

var user1 = {

    name : "Madhumitha"

};



//2) by using new Object

var student = new Object();

student.name="Madhumitha";

console.log(student);

console.log(user1);



var employee = {};

employee["name"] = "Pravalika";

employee["dept"] = "CSE";



console.log(employee);

console.log(employee.dept);



var userDetails = {

    name:"Madhumitha",

    address:{

        city:"Hyderabad"

    }

};

console.log(userDetails);

console.log(userDetails.address.city);