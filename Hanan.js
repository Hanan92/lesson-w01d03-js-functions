
//Lab: Functions
//example 1

const youROCK = Function (name) {
	return "you Rock"+ name +"!" ; 
}

    //example2 
const square = Function(num) {
	return num*num; 
}


   //example3

const cube = Function(num) {
	return num*num*num; 


   //example4

const toTheFourth = Function(num) {
	return num*num*num*num; 


  //Extra Practice 

const calculator =function (num1,num2,operation){
if(typeof num1== 'number' && typeof num2 == 'number'){
switch(operation){
    case "add":
return num1+num2;
break;
  case "subtract":
return num1-num2;
break;
case "divide":
return num1/num2;
break;
case "multiply":
return num1*num2;
break;
case "multiply":
return num1*num2;
break;

    default:
console.log("calculator can only add, subtract, divide, or multiply");

}}else console.log("calculator only accepts numbers");

}


//Lab: RainDrop Function 
const RainDrop =function (number){

    let output=" ";
    if (number %3 ==0) {
    output+="pling";}
    if (number%5 ==0){
    output+="Plang";}
    if (number%7 ==0){
    output+="Plong";}
    console.log(output || number);

    }

 //Lab: FizzBuzz 
 const fizzBuzz = function (numuber){
    let output=" ";

    if(number %3 ==0){
    output+="Fizz"}
    if(number %5 ==0){
    output+="Buzz";}
    return (output||number);}





