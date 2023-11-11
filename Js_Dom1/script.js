//window -> it is  global object created by browser and represent a browser window

//window -> Dom,Bom
//Dom -> document object model 
//html code convert in to a js code that is called document object model
//to see entire html code
//console.log(document);
//To see body of the html code
//console.log(document.body);
//To see head of the html code
//console.log(document.head);

//Way to fetching element from html code
//1.getElementById("Id name") -> It returns one element it is used by document
//e.g -> document.getElementById("navbar");

//2.getElementsByClassName("Class name") -> It returns HTML Collections (similar to array and object);
//It used by document
//e.g -> document.getElementsByClassName("demo");

//3.getElementsByTagName("Tag name") -> It returns HTML Collections 
//it is used by document
//e.g document.getElementsByTagName("p")

//concept of the $0 -> it is used to fetch select element on document object 

//4.querySelector("#headingName,.className,tagname") -> by using queruSelector we can fetch HTML element in querySelector we can fetch by heading ,className, tagName. it return a single element. in case of multiple it return first one.

//5.querySelectorAll("")-> It return HTML Collection

//To update existing content
//1.innerHTML -. we can get and set HTML content
 //const information = document.getElementById('info');
// console.log(information.innerHTML);
// This is a paragraph
// <b> This is Love Babbar</b>

//2.outerHTML -> it render all information about element whatever you want to fetch. it gives acendent and decendent
//console.log(information.outerHTML);
// <p id="info">
//         This is a paragraph
//         <b> This is Love Babbar</b>

//     </p> 

//2.textContent -> it does not render tag but pre tag ke jaisa work karta hai
//console.log(information.textContent);
// This is a paragraph
// This is Love Babbar

//3.innerText -> it does not render tag but it does not render space. hidden display element will not visible
//console.log(information.innerText);
//This is a paragraph This is Love Babbar

//Adding new element in HTML content by using js
//To create element 
//.createElement('tagName');
//e.g let newEle = document.createElement('div');


//Style page content using java Script
//1.style
//2.serAttribute()
//3.cssText
//4.className
//5.classList