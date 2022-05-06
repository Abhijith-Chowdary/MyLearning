var ret_data = require('./external');
var ret_data2 = require('./external2');
var var1 = 5,
    var2 = 7,
    var5 = 56,
    var6 = 46;
console.log(var1 + var2 + 10);

ret_data.data1();

console.log(ret_data2.data2);

function func2(){
    console.log('Hi, this is the console inside the function....');
}
func2();

console.log(56 == 49);
console.log(49 == 49);

if(var5 == var6){
    console.log('The variables are equal to each other');
}else{
    console.log('The variables are not equal to each other');
}

for(a=1;a<10;a++){
    console.log(a+'. This is the loop');
}

var person = {name: 'Abhi', hairColor: 'Brown', eyeColor: 'Black'};
console.log(person.name);
console.log(person.hairColor);
console.log(person.eyeColor);
