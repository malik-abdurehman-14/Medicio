// const i =10;
// const y = 23;

// function Sum(a,b){
//     console.log(a+b);
// }

// Sum(i,y);



// var d= 20;
// const r=50;
// var d=30;

// function min(c,e){
//     console.log(e-c);
// }
// min(d,r);



// var k= 2;
// const l=5;
// let u =4;

// function multiply(k,l,i){
//     console.log((k*u)*l);
// }
// multiply(k,l,u);



// const t=100;
// let z=50;
//   z= 10;

// function divide(n,m){
//     console.log(n/m)
// }

// divide(t,z);







// const a=prompt("Enter a number");

// if(a>10){
//     console.log("this is " , a)
// }else{
//     console.log("Enter a value whic ]h is lesser than 10")
// }





// let i=0;
// let even=0;
// let odd=0;
// while(i<=10){
//     if(i%2 == 0){
//         even++;
//     }
//     else{
//         odd++;
//     }
//     i++;
// }
// console.log("Even numbers in 1 to 10 is :",even);
// console.log("Odd numbers in 1 to 10 is :",odd);







// const num1=prompt("enter first number :")
// const num2=prompt("enter second number :")

// let min;
// if(num1<num2){
//     min=num1;
// }
// else{
//     min=num2;
// }
// let e=1;
// while(e<=min){
//     if(num1%e == 0 && num2%e == 0){
//         console.log(e);
//     }
//    e=e+1;
// }







// let f_name=prompt("Enter fruit name which u want to buy.");

// switch(f_name){

//     case'Apple':
//     console.log(" Apple Price per kg = 200 Pkr ");
//     break;
//     case'Guava':
//     console.log(" Guava Price per kg = 100 Pkr");
//      break;
//     case'Orange':
//     console.log(" Orange Price per kg = 300 Pkr");
//     break;
//     case'Grapes':
//     console.log(" Grapes Price per kg = 220 Pkr");
//      break;
//     default:
//     console.log("This Fruit is  not available.");
// }





// const a=prompt("Enter your age:");
// if(a>18){
//     console.log("Adult");
// }
// else if(a<14){
//     console.log("Child");
// }
// else{
//     console.log("Teen");
// }



// let total_earning=prompt("Enter your total earning?")
//   let total_price_of_stock=prompt("Enter total price of stock?")
//     if(total_earning<total_price_of_stock){
//     console.log("Loss");
//     }
//     else{
//     console.log("Profit");
//     }



// const b=prompt("Enter a character.");
// if(b>='A' && b<='Z') 

// console.log("This is an upercase letter."); 

// else if(b>='a'&& b<='z')

//  console.log("This is an lowercase letter."); 

// else if (a>=48 && a<=57)
// console.log("number");

// else
// {
//  console.log("This is not a character.");
// }





// const basic_salary=prompt("Enter your basic salary.")
// const grade=prompt("Enter your Grade.")

// const hra= 0.2*basic_salary;
// const da= 0.5*basic_salary;
// const pf= 0.11*basic_salary;
// let allow;
//  if(grade =='A'){
//  allow=1700;
//  }
//  else if(grade =='B'){
//  allow=1500;
//  }
//  else{
//  allow=1300;
//  }
// let total_salary;
//  total_salary=(basic_salary+hra+da+allow-pf);
//  console.log("Total salary =",total_salary);





// let  c=Number(prompt("Enter a character."));
// if((c>='A' && c<='Z')||(c>='a' && c<='z'))
// {

// if(c>='A' && c<='Z')
// c=c+32;

// else if(c>='a' && c<='z')
// c=c-32;
// console.log("convert character",c);
// }

// else
// console.log("not a character");







// for(let i=0;i<=10;i++ ){
//     console.log(i);
// }

// int arr[5]={"1,2,3,4,5"}

// const arr=[1,2,3,4,5,6,7];
// console.log(arr.length);
// console.log(arr.indexOf(7));
// const arr_two=["sohaib" , "ali", "sharjel"];
// console.log(arr_two.indexOf("sohaib"));
// arr.shift(1);
// console.log(arr);
// arr.pop(7);
// console.log(arr);









// 5- Create an empty array and push the 5 values into the array by using prompt box.


// let arr=[];
// value1=prompt("Enter value.");
// value2=prompt("Enter value.");
// value3=prompt("Enter value.");
// value4=prompt("Enter value.");
// value5=prompt("Enter value.");
// arr.push(value1,value2,value3,value4,value5);
// console.log(arr);






// 6- Write a JavaScript program that can find the odd and even numbers from an array.



// const arr=[1,2,3,4,5,6,7];
// let even=0;
// let odd=0;
// let i=0;
// while(arr[i] <= (arr.length)){
//     if(arr[i] % 2 == 0){
//         even++;
//     }
//     else{
//         odd++;
//     }
//     arr[i]++;
// }
// console.log("Even numbers in array is :",even);
// console.log("Odd numbers in array is :",odd);





// 1- Create a function called isEven that takes a number as an argument 
// and returns true if the number is even and false if it is odd.



// const i=prompt("Enter a number.");
// let even=0;
// let odd=0;
// if(i % 2 == 0){
//     console.log(i," is an even number. ");
// }
// else{
//     console.log(i," is an odd number.")
// }




// 2- Create a function called sum that takes an array of numbers as an argument and returns their sum.



// function sum(arr){
//     let sumnumber=0;
//     for(let i=0;i<(arr.length);i++){
//         sumnumber +=arr[i];
//     }
//     return sumnumber;

// }

// let arr=[];
// const a=Number(prompt("Enter first number."));
// const b=Number(prompt("Enter second number."));
// const c=Number(prompt("Enter third number."));
// const d=Number(prompt("Enter fourth number."));
// const e=Number(prompt("Enter fifth number."));
// arr.push(a,b,c,d,e);
// console.log(arr);

// let result=sum(arr);
// console.log(result);
 








// 6- Create a function called isEven that takes a number as an argument and 
// returns true if the number is even and false if it is odd.




// const num1=prompt("Enter a number.");
// function isEven(num1){
//      if(num1%2 == 0){
//         console.log("True");
//      }
//      else{
//         console.log("False");
//      }
// }
// isEven(num1);








// 5- Create a function called max that takes an array of numbers as an argument 
// and returns the maximum number in the array.



// function max(arr) {
//     let maxNumber = 0;
//     for (let i = 1; i<arr.length; i++) {
//       if (arr[i]>maxNumber) {
//         maxNumber = arr[i];
//       }
//     }
//     return maxNumber;
//   }
//   let arr=[];
//    const a=Number(prompt("Enter first number."));
//    const b=Number(prompt("Enter second number."));
//    const c=Number(prompt("Enter third number."));
//    const d=Number(prompt("Enter fourth number."));
//    const e=Number(prompt("Enter fifth number."));
//     arr.push(a,b,c,d,e);
//     console.log(arr);
//     const MaximumNumber = max(arr);
//     console.log(MaximumNumber);









// Arrange numbers in Assending order
// let num1=prompt("Enter first number.");
// let num2=prompt("Enter second number.");
// let num3=prompt("Enter third number.");

// let z;
// if(num1>num2){
//     z=num1;
//     num1=num2;
//     num2=z;
// }
// if(num2>num3){
//    z=num2;
//    num2=num3;
//    num3=z;
// }
// if(num1>num2){
//    z=num1;
//    num1=num2;
//    num2=z;
// }
// console.log("Values in assending order :",num1,num2,num3);







// Create a function called titleCase that takes a string as an argument and returns the string 
// with the first letter of each word capitalized. titleCase("javascript is awesome") // "Javascript Is Awesome"

// let str=prompt("Enter sentence.")
// function titleCase(str) {
//     const words = str.split(" ");

//   }
//   console.log(titleCase(str));





//  Create a function called isPalindrome that takes a string as an argument and returns true if the 
// string is a palindrome (reads the same forward and backward) and false otherwise. isPalindrome("racecar")


// let str=prompt("Enter your string.");
// function isPalindrome(str) {
//     const lowerCaseStr = str.toLowerCase();
//     const reversedStr = lowerCaseStr.split('').reverse().join('');
//     return lowerCaseStr === reversedStr;
//   }
//     console.log(isPalindrome(str));


// Create a function called repeat that takes a string and a number as arguments and returns the string 
// repeated the specified number of times. repeat("hello", 3) // "hellohellohello"




// function repeat(text){
//     let result = text.repeat(3);
//     console.log(result);
// }
// let text = "Hello world!";
// repeat(text);







// method to reverse a string

// let original = "Hello World";
// let reversed = original.split('').reverse().join('');
// console.log(reversed);


// Method of concat

// let name1 = "Abdurehman";
// let name2= "Ali";
// console.log(name1.concat(" is a friend of " + name2));









// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join(" "));






// var a=5.36;
// var nam1= a.toExponential(2);
// console.log(nam1);  


// const arr=["Sohaib","Sherjeel","Abdurehman","Ali"];
// const new_arr=arr.filter((item)=>
// item===("Abdurehman"));

// console.log(new_arr);




// 01-Feb-24
// Arrays Questions using Map() and Filter Function()

// 1-Given an array of numbers, create a new array containing only the even numbers using the filter method.


// const arr2=[1,2,3,4,5,6,7,8,9,10];
// const new_arr1=arr2.filter((item)=>
// item%2 ===0);
// console.log(new_arr1);




// // 2-Given an array of names, create a new array containing the names in uppercase using the map method.


// const str1=["Sohaib","Sherjeel","Abdurehman","Ali"];
// const new_arr=str1.map(item=>
//     item.toUpperCase());
//    console.log(new_arr);





// 3-Given an array of words, create a new array containing only the words that start 
// with the letter 'S' using the filter method.


// const str=["Sohaib","Sherjeel","Abdurehman","Ali"];
// const new_str=str.filter(str=>
    
//     str.startsWith('S'));

// console.log(new_str);




// 4-Given an array of temperatures in Fahrenheit, convert each temperature to Celsius using the map method.



// const temperatures= [150, 69, 90, 104, 212];
// let temperaturescelcius = temperatures.map(item=>
//     [(item - 32)*5]/9);
//     console.log(temperaturescelcius);


// [(°F-32)×5]/9




// 5-Given an array of names, create a new array containing only the names with a length greater
//  than 5 using the filter method.


// const str3=["Sohaib","Sherjeel","Abdurehman","Ali","Emad","saad"];
// const namelength= str3.filter(item =>
//     item.length > 5);
//     console.log(namelength);



// 6-Given an array of numbers, create a new array containing the square root of positive
//  numbers using the map and filter methods.



// const arr=[4,-4,9,15,100,-8,-64];
// const positiveNumbers = arr.filter(item => item > 0);
// const sqrtNumbers=positiveNumbers.map(item => (Math.sqrt(item)));
// console.log(sqrtNumbers);






// 2-Feb-2024
// 1-Create a function that partitions an array into two arrays - one with even numbers and
//  another with odd numbers.




const arr_4=[1,2,3,4,5,6,7,8,9,10];
const even_arr=arr_4.filter((item)=>
item%2 ===0);
console.log("Even Numbers :",even_arr);
const odd_arr=arr_4.filter((value)=>
value%2 !=0);
console.log("Odd Numbers :",odd_arr);








// 2-Create a function to remove duplicate elements from an array.

function removeNumbers(arr){
    const duplicate_arr=[];
    for(let i=0;i < arr.length;i++){
      if( ! duplicate_arr.includes(arr[i])){
      duplicate_arr.push(arr[i]);
     } 
    //  else{
    //     duplicate_arr.push(arr[i]);
    // }
     }
     return duplicate_arr;
}

const arr=[1,2,3,4,5,2,3];
const result_1= removeNumbers(arr);
console.log(result_1);



// 3-Write a function that returns the intersection (common elements) of two arrays.



function Intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 5, 7, 9, 10];
  const commonelement = Intersection(arr1, arr2);
  console.log("Common Elements is :",commonelement);






//4- Write a function that removes all falsy values (false, null, "", undefined, and NaN) from an
//  array using filter.




function removevalues(arr3){
    return arr3.filter(item => (item));
  }
  
  const arr3 = [10, 0, 0.34, false, '', 'Ali', null, undefined,'Abdurehman', NaN];
  const filter_arr = removevalues(arr3);
  console.log(arr3);
  console.log(filter_arr);
  console.log("The length of updated array is",filter_arr.length);



  
  function check(a){
    if(a){
        console.log("true")
    }else{
        console.log("false")

    }
  }

  check(NaN);