///Get freshness of sync and async code
// function sync(){
//     console.log('First');
// }

// sync();

// console.log('Second');

//setTimeout() -> it is the example of the async code
// setTimeout(function(){
//     console.log('Third');
// },10000);

// function sync(){
//     console.log('First');
// }
// sync();

// console.log('Second');

//Features of async code
//1.clear and cosise
//2.easier to debugging
//3.better error handling
//let's learn API
//API -> Application Programming Interface
//api is way to established communication between two software component
//H/w->Read get,post,put api

//promise -> it is used for parallel execution
//creation of the promise
// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     },5000);
//     //resolve(2003);
//     //reject kab jab koi error aayega so,error throw kr do aur kya
//     reject(new Error('Error aa gaya'));
// });

// console.log('Mai hu pahla');

// //let's see our promise
// console.log(myPromise);

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// let myPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise1');
//     },5000);
//     resolve(2003);
    
// });

// let myPromise2 =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },3000);
//     resolve(2003);
    
// });

// console.log('Mai hu pahla');

//Note -> we can use two method on promise
//1.then() -> if we want to do something with the value of fulfilled sates then we use then() method
//2.catch() ->catch() is used to in case of the reject states

//then()
// let myPromise =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },3000);
//     resolve(2003);
    
// });

//myPromise.then((value)=>console.log(value));//o/p-> 2003

//catch()
// let myPromise =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },3000);
//     reject(new Error('I am reject'))
    
// });

// myPromise.catch((error)=>console.log(error));

//Note -> we can write using only then()
// myPromise.then((value)=>{console.log(value)},(error)=>{console.log('Received an error')});

//Let's handle multiple promise dependecies
//concept of promise chaining
// let wadda1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am wadda1');
//     },10000);

//     resolve(true);
// })

//  let getwadda2 = wadda1.then(function(){
//     let wadda2 = new Promise((resolve,reject)=>{
//           setTimeout(()=>{console.log('I am wadda2')},5000);
//           resolve(true);
//     })
//     return wadda2;
// })

// let output = getwadda2.then((value)=>{
//     let wadda3 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{console.log('I am wadda3'),2000});
//         resolve('wadda3 had resolved');
//     })

//     return wadda3;
// });

// output.then((value)=>{console.log(value)});
 
//kya hoga jab 50 or jayada promise ek dushre pr depend kare kya 50 times then() likhenge in case no then what?

//we will use async and await
//Note1 -> we can make any function async and await
//Note2 -> async function always return a  promise
//syntax of writing async code
//async function(){//body  of function}

// async function func1(){
//     return 7;
// }

// console.log(func1());//o/p -> promise aayega bhaiya

// async function utility1(){

//     let delhiMausam = new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("Delhi is hot");
//        },1000);
//     });

//     let hydMausam = new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("Hydrabad is cool");
//        },20000);
//     });

//     //These promise will execute parallely
//     let dm = delhiMausam;
//     let hm = hydMausam;

//     return [dm,hm];
// }

// console.log(utility1());


// async function utility2(){

//     let delhiMausam = new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("Delhi is hot");
//        },1000);
//     });

//     let hydMausam = new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("Hydrabad is cool");
//        },20000);
//     });

//     //second execution will start after first completed
//     let dm = await delhiMausam;
//     let hm =await hydMausam;

//     return [dm,hm];
// }


//concept of fetch api -> in case of send and retrive data from network by using fetch() method

//let content = fetch('https://jsonplaceholder.typicode.com/todos/1');
//console.log(content);//o/p-> promise
//Note -> fetch api return a promise

//get call by using fetch() means retrive data
// async function utility(){
//     let responce = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     //json is api reader 
//     let content = await responce.json();
//     console.log(content);
// }

// utility();

//Note -> above api is fake or free api so we didn't use api key buy in a particular case may be need of api key

//post api -> send data by using fetch method
//syntax -> fetch('url',options);

// async function helper(){

// let options =  {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     }
// };

// //post call
// let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
// let responce = await content.json();
// console.log(responce); 

// };

// helper();

//json.stringify()

// console.log(JSON.stringify({ x: 5, y: 6 }));

// let options = {
//     fName:'Love',
//     lName:'Babbar'
// };

// console.log(JSON.stringify(options));//{"fName:"Love","lName":"Babbar"}

//concept of closures -> ek function ko uske required data ke sath bined kiya jata hai

//Note -> in closures function bined with references not copy

// function init(){
//     var name = 'Love Babbar';
//     function displayName(){
//         console.log(name);
//     }

//     displayName();
// }

// init();

// function init(){
//     let name = 'Love Babbar';

//     function displayName(){
//         console.log(name);
//     }

//    return  displayName;
// }

// let func1 = init();
// func1();



