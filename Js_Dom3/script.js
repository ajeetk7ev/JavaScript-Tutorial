//1.performance
//how to measure speed of code
//how to write efficient and performing code
//Event loop

//1.performance
//Adding 100 para
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newEle = document.createElement('p');
//     newEle.textContent = 'This is para'+i;
//     document.body.appendChild(newEle);
// }

// const t2 = performance.now();
// console.log('The first code took '+ (t2-t1) +' ms');

//A bit optimise
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newEle = document.createElement('p');
//     newEle.textContent = 'This is para'+i;
//     myDiv.appendChild(newEle);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log('The second code took ' +(t4-t3)+' ms');

//But to check optimisation of code
//use performance.now() -> it is very accurate not as c++

//Reflow and Repaint
//Reflow -> when we add any new element then calculation occurs this method of calculation is called reflow

//Repaint -> To show on display pixel by pixel of a new layout is called repaint

//Note -> for each and every new element repaint and reflow occurs
//so for our code 100 times repaint and reflow hua hoga 

//Best practise -> Jitni kam se reflow and repaint ho use mai best practice consider karunga

//Document fragment -> Light weight document object on it reflow and repaint not occur
//Note -> when we add fragment to the actual document then one reflow and one repaint occur
//one by one we will add para on document fragment

//create fragment
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newEle = document.createElement('p');
//     newEle.textContent = 'This is para'+i;
//     fragment.appendChild(newEle);
// }

//call stack -> keep track of function when a funciton call then make entery of that function in call stack and when function completed then entery will remove from the call stack

//single therading -> one command at a time 
//Note -> js is single thered language means it process one cmd at a time
//Synchoronous -> execution of code start step by step 

// function addPara(){
//     let element = document.createElement('p');
//     element.textContent = 'Hi this is Love Babbar';
//     document.body.appendChild(element);

// }

// function greet(){
//     let newEle = document.createElement('p');
//     newEle.textContent = 'Hi Good Morning!';
//     document.body.appendChild(newEle);
// }

// addPara();
// greet();

//Obsevation of the above code
//1.First print Hi this is Love Babbar and second print Hi Good Morning!
//so, I can say that here nature of the our code is run to compilation means another execution will start after previous execution

//2.Js does not execute multiple line at a same time

//3.Event loop -> An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//in event loop three things needed 
//1.call stack
//2.Browser
//3.queue

//Let's understand asynchronous and synchronous 

//Note -> Java Script is single threding asynchronous language
//e.g1 -> function greet(){ // body of the function } here greet is synchronous 
//e.g2 ->document.addEventListener('click',function(){//body of the funciton }) this is a asynchronous 

//asynchronous -> Functions running in parallel with other functions are called asynchronous <"I will finish later!"> 


//e.g -> setTimeout()

// setTimeout(myFunction, 100000);
// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// }

// function greet(){
//     console.log("Hi Good Morning this is Love Babbar");
// }
// greet();

//here first print greet() and second print setTimeout();

//setTimeout(function,ms) -> The setTimeout() method calls a function after a number of milliseconds.