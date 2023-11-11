//use addEventListener();
//let content = document.querySelector('.box');
// let content = document.querySelectorAll('.box');

//To add event listener on first box
// content.addEventListener('click',function(){
//     content.style.color = 'white';
// });

//To add event listener on all the boxes
// content.forEach((content1)=>{
//     content1.addEventListener('click',function(){
//          content1.style.backgroundColor = 'green';
//         // console.log("i worked");
//    });
// });


//concept of removeEventListenerj()
//condition
//condition1->target must be same
//condition2->event must be same
//condition3->function must be same reference to the same address

// func1:function func(){
//     console.log('hii how r u');
// }

//func2:function func(){
//     console.log('hii how r u');
// }

//Note -> func1 and func2 are not same their address is different

//let implement remove event listener
// content.addEventListener('click',function(){
//         content.style.color = 'white';
//     });

// //This will not work    
// content.removeEventListener('click',function(){
//             content.style.color = 'white';
//         });

// function styleFunc(){
//     content.style.color = 'white';
// };

// content.addEventListener('click',styleFunc);
    
// //This will work  styleFunc is point to the same address
// content.removeEventListener('click',styleFunc);

//event object -> when an event occurs addEventListener() get a event object which has a lot of information

//let inputEle = document.querySelector('.inputTag');
// inputEle.addEventListener('click',function(event){
//     console.log(event);
// })

//target event property -> it returns the element where the event occured
// let inputEle = document.querySelector('.inputTag');
// inputEle.addEventListener('click',function(event){
//     event.target.value=30;
// }); //it will update the value of the input 

//The default action
// let getLinks = document.querySelectorAll('a');
// let link1 = getLinks[0];
// let link2 = getLinks[1];
// let link3 = getLinks[2];

//set defaulet action on link3
// link3.addEventListener('click',function(event){
//           event.preventDefault();
// })

//concept of avoid too mauny events
// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newEle = document.createElement('p');
//     newEle.textContent = 'This is para'+i;
//     newEle.addEventListener('click',()=>console.log("I have clicked on para"));
//     myDiv.appendChild(newEle);
// }

// document.body.appendChild(myDiv);

//optimisation of above code instead of using evenlistener on each and everypara i added on mydiv means top level div
// let myDiv = document.createElement('div');
// myDiv.addEventListener('click',()=>console.log('I have clicked on para'));
// for(let i=1; i<=100; i++){
//     let newEle = document.createElement('p');
//     newEle.textContent = 'This is para'+i;
//     // newEle.addEventListener('click',()=>console.log("I have clicked on para"));
//     myDiv.appendChild(newEle);
// }

// document.body.appendChild(myDiv);

//Access individual element

//From this we can not access individual element
let getContent = document.querySelector('.wrapper');
// getContent.addEventListener('click',(event)=>console.log('I have click on '+event.target.textContent));

//to get individual element
// getContent.addEventListener('click',(event)=>{
//     if(event.target.nodeName === 'SPAN'){
//         console.log('I have clicked on span ');
//     }

//     else{
//         console.log('I have clicked on para');
//     }
// })

//How to know all HTML content is render or not
//we have a domContentLoaded in network section

//we all know that to js code in head tag is not safe
//but if we add a eventlistener at domContentLoaded then it is safe;
//e.g-> document.addEventListener('DomContentLoaded',function(){
    ///body of the function
//})







