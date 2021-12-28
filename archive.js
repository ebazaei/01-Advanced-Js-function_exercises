    function getGreeting() {
        console.log("aaa");
    }
  
function getGreeting2() {
    console.log("bbb");
    }
  
// console.log(getGreeting()); 
// console.log(getGreeting);     

// const f = getGreeting;
// f(); // "Hello, World!"
// console.log(f());   // "Hello, World!"

//Or assign a function to an object property:
// const obj = {}
// obj.fun = 1111;
// obj.name = "ehsan";
// obj.fn = getGreeting()
// console.log(obj)
// delete obj.fun
// console.log(obj)

//Or even add a function to an array:
//   const arr = [1, 2, 3];
//   arr[1] = getGreeting;  // arr is now [1, function getGreeting(), 2]
//   arr[2] = getGreeting2;
//   arr[2]();            // "Hello, World!" 
//   //notice the syntax of calling a function inside an array by using the index


//----------------------Destructuring & Default arguments------------------------


// function getSentence({ subject, verb, object }) {
//     return `${subject} ${verb} ${object}`;
//   }
//   const obj = {
//       subject: "I",
//       verb:    "love",
//       object:  "JavaScript",
//   }
//   getSentence(obj);      // "I love JavaScript"
//   console.log(getSentence(obj))

//  let obj2 = {
//       name: "ehsan", fam:"baza"
//   }

//   console.log(obj2)
//   obj2.name = "ali"
//   console.log(obj2)
//   delete obj2.name
//   console.log(obj2)
  

// function test1({a,b}){
//     console.log(a+b)
// }
// const obj3 ={
//     a:2,
//     b:3
// }
// test1(obj3)

// function getSentence([ subject, verb, object ]) {
//     console.log(`${subject} ${verb} ${object}`) 
//   }
//   const arr = [ "I", "love", "JavaScript" ];
//   getSentence(arr);  // "I love JavaScript"


// function test(a, b = "default", c = 3) {
//     console.log(`${a} - ${b} - ${c}`) 
//   }
//   test(5, 6, 7);  // "5 - 6 - 7"
//   test(5, 6);     // "5 - 6 - 3"
//   test(5);        // "5 - default - 3"
//   test();         // "undefined - default - 3"



// const cats = {
//     name: 'Lucky',
//     origin: function() { return 'Egyptian'; } // function property (method)
//   }

//   console.log(cats.origin())


// const cats = {
//     name: 'Lucky',
//     origin() { return 'Egyptian'; } // function property (method)
//   }
//   console.log(cats.origin())

//----------------------The this Keyword------------------------

// const obj = {
//     name: 'Jon',
//     speak() { return `My name is ${this.name}!`; }
// }
// const speak = obj.speak;                
// console.log(speak === obj.speak) // true; both variables refer to the same function
// console.log(speak()) // "My name is !"



// let wel = function(){
//     console.log('test')
// }
// wel()



// a= 3
// b= 2
// if (a < b) {
//     resulta = function() {
//         console.log('ok');
//     };
//   } else {
//     resulta = function() {
//         console.log('No');
//     };
//   }
// resulta()


//3taei
// a= 7;b= 5;
// let resulta = ( a > b )? function() {console.log('Ok');} : function() {console.log('No');};
// resulta()



//arrow functions----------------------------توابع فلش دار

/* The arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/

// let sum = (a,b) => a+b;
// console.log(sum(3,4));


//hazfe parantez ba 1 argoman----اگر تنها یک آرگومان داشته باشیم می توان پرانتزها را نیز حذف کرد :

// let sum2 = n => n + 120;
// console.log(sum2(3));

//parantez khali bedoone argoman----اگر هیچ آرگومانی نداشته باشیم باید پرانتزها خالی نوشته شوند :
// let biparantez = () => console.log('Bi Parantez')';
// biparantez();

//array function dar if 3 taei
// a= 7;b= 5;
// let resulta = ( a > b ) ? () => console.log('Ok') : console.log('No');
// resulta()



// توابع فلش دار چند خطی
// گاهی اوقات بدنه توابع بیش از یک خط است ، در این صورت بدنه باید داخل { } قرار بگیرد و سپس نتیجه به صورت معمولی با کلمه return برگشت داده شود :

// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, use return to get results
//   };
  
// alert( sum(1, 2) ); // 3


