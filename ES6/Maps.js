var users = [

    {

    name:"Madhumitha",

    age:22

},

{

    name:"Pravalika",

    age:18

}];

//array of objects 

//This is call Chaining of Functions: calling map from filter

var ageGreater20 = users.filter(function(item, index){

    return item.age>20;

});

//maps returns same amt of data in array;

var ages = users.map(function(item, index){

    //LHS age can be any variable you want to display in console

    return {age:item.age}

});



console.log(ages);