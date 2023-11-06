// console.log("Jay Shree Ram");
// //create object
// const rectangle3={
//     length:1,
//     breadth:2,
//     draw:function sum (){
//         console.log(this.length+this.breadth);
//     }
// };

// console.log(rectangle3.draw());

// const person1 = new Object();
// person1.name="love Babbar";
// console.log(person1.name);
// console.log(typeof(person1));
// console.log(person1['name']);
//Factory function -> use to make code reusable
// function createRectangle(len,bredth){
//   const  rectangle={
//         length:len,
//         breadth:bredth,
//         draw:function(){
//             console.log("This is draw method");
//         }
//     };
//     return rectangle;
// }

// let recta = new Function('len','bre',`function createRectangle(){
//     const  rectangle={
//           length:len,
//           breadth:bre,
//           draw:function(){
//               console.log("This is draw method");
//           }
//       };
//       return rectangle;
//   }`);

//   console.log(recta(3,4));
//   console.log(recta.breadth);

// var func = new Function('x','y','return x + y;');
// console.log(func(2,3));

//concept of the constructor function
var rec = new Function('len','bre',`return rectanle = {
    length:len,
    bredth:bre
};`);
console.log(rec(4,5));

// let obj1=createRectangle(10,4);
// let obj2=createRectangle(5,6);
// console.log(obj1.length);

// // //constructor function -> use initialize value or property

// function Rectangle5(len,bre){
//     this.length=len;
//     this.bredth=bre;

// }

// let recObj=new Rectangle5(23,43);
// console.log(typeof(recObj));
// console.log(recObj.length);

//Dynamic nature of object
//delete and insert

// const person = {
//     firstName:'Priti',
//     lastName:'Sharma'
// };

// person.age=20;
// person.firstName='sita';
// console.log(person);
// delete person.age;
// delete person['lastName'];
// console.log(person);
// console.log(person.constructor);

//constructor property -> cs property tells how object is created
//syntax: objName.constructor

//primitive vs reference

// let a = 10;
// let b = a;
// a++;
// b++;

// let value = {
//     id:20,
//     age:34
// };

// let value1 = value;

//concept of for...in and for...of

const rectangle = {
    length:3,
    bredth:4,
    naam:'Love babbar'
};

// for(let key in rectangle){
//     console.log(key + ":" +rectangle[key]);
// }

//for...of -> it is used on iterable e.g array map

for(let key of Object.Keys.rectangle){
    console.log(key + " " +rectangle[key]);

}


//object cloning
//1.iteration method
//2.aggign()
//3.spread operator

// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// for(let key in dest){
//     console.log(key)+" "+dest[key];
// }

// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest = Object.assign({},src);
// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest = {...src};



//string -> in js string has two types
//1:primitive type
//2:object type

//primitive type

// let fullName = 'Love Babbar';
// console.log(fullName);
// console.log(typeof(fullName));

// //we use string constructor function to change string object
// //object type
// let lastName = new String("babbar");
// console.log(lastName);
// console.log(typeof(lastName));

// //we can change primitive string to string-object by using dot notation
// console.log(fullName.charAt(2));
// //To print entire string
// //for(let i=0; fullName.length; i++){
//     console.log(fullName.charAt(i));
// //}



