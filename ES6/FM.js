var users = [

    {

    name:"madhumitha",

    age:22

},

{

    name:"pravalika",

    age:18

}];



var filMap = users.filter(function(item, index){

    return item.age>20

}).map(function(item, index){

    return {name:item.name}

});

console.log(filMap);