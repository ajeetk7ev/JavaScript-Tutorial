//console.log("This is js basic class 3");
//some in-built object
//1:math

// let random = Math.random();
// console.log(random);

// let roundof = Math.round(1.6);
// console.log(roundof);

// let maxi = Math.max(1,2,4,5);
// console.log(maxi);

// let mini = Math.min(1,2,4,5);
// console.log(mini);

// let absolute = Math.abs(-1.2);
// console.log(absolute);

// let power = Math.pow(2,4);
// console.log(power);

// function getRandom(max){
//     return Math.floor(Math.random()*max);
// }

// console.log(getRandom(3));

//string -> in js string has two types
//1:primitive type
//2:object type

//primitive type
// let fullName = "Love babbar";
// //some operation on string
// console.log(fullName.charAt(9));
// console.log(fullName.endsWith("ar"));
// console.log(fullName.indexOf("a"));
// console.log(fullName.includes("Love"));
// console.log(fullName.toUpperCase());
// console.log(fullName.length);
// console.log(fullName.split(""));
// console.log(fullName.trim());
// console.log(fullName.indexOf("o"));


// let newString = fullName.replace("babbar","Bhaiya");
// console.log(fullName.replace("babbar","Bhaiya"));
// console.log(newString);


//concept of template literal(``) -> Template literal used to read more line
//without template literal
// let poem = "Twinkle, twinkle, little star,
// How I wonder what you are!
// Up above the world so high,
// Like a diamond in the sky."

//above code will give error

// let poem = `Twinkle, twinkle, little star,
// How I wonder what you are!
// Up above the world so high,
// Like a diamond in the sky.`;

// console.log(poem);

// //concept of dynamic string by using ${};
// // let's understand

// let firstName = "Love "
// let lastName = "Babbar";

// //let's change dynamically
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//date and time object
//we have five way to create date

//It will give current date
// let date1 = new Date();
// console.log(date1)

// let date2 = new Date('december 26 2003 ')
// console.log(date2);

// //Here month will map with [0-11] 0 -> january
// //11-> december
// let date3 = new Date(2003,11,26,4);
// console.log(date3);

// //dynamically change in date
// date3.setMonth(2);
// console.log(date3);

// date3.setFullYear(2004);
// console.log(date3);

//Magic of array 
//Let's start

//Array -> multiple value under a single name 
// in js array is type of object

//creation of the array
// let arr = [1,2,3,4,5];
// console.log(arr);

//accessing array element
//method1:By using index
// let num1 = arr[0];
// console.log(num1);

// let num2 = arr[1];
// console.log(num2);

// let num3 = arr[2];
// console.log(num3);

//Method2:By using For loop
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

//operation on array
//1-> Insertion
//3 way to insert element in an array
//1.beginning 2.middle 3.end

// let numbers = [3,4,5,6,7];
// //1.Begin
// numbers.unshift(2);
// numbers.unshift(1);

// //2.Middle
// numbers.splice(2,0,7);
// numbers.splice(3,0,8);

// //3.End
// numbers.push(19);
// numbers.push(20);

// //Let's print the arrray
// let len = numbers.length;
// console.log("Length of the array is : "+len);
// for(let i=0; i<numbers.length; i++){
//      console.log(numbers[i]);
// }

// //2.Searching in array
// //1.indexof();
// console.log(numbers.indexOf(2));
// console.log(numbers.includes(4));

// //Here searched element is not present in an array so ans will be -1
// console.log(numbers.indexOf(21));

// //new version of indexof()
// console.log(numbers.indexOf(2,3));

//observation  we can check existance of element in the array by using include() and indexof()
//best pr. is use only include()

//some operation on the references 
//Let's create

// let courses = [
//     {no:1,courseName:"Full Stack java developer"},
//     {no:2,courseName:"Full Stack Web Developer"},
//     {no:3,courseName:"Data Structuer And Algorithm"}
// ];

// //print courses
// console.log(courses);

// //Searching the property of the object
// //can we use include() and indexof() ?
// //Let's try

// //It is giving -1
// console.log(courses.indexOf({no:1,courseName:"Full Stack java developer"}));

//so we can't use index() and indexof() on the references like object

//in case of serching on the refernces we use callback function or predicate function or comparison function

//Let's understand callback function 
//callback function -> A function which is to be executed after another function execution

//Another Way -> Any function that is passed as an argument to another functio so that it can be executed in that function is called callback function

//Let's try

// let ans1 = courses.find(function(course){
//     return (course.courseName == "Full Stack java developer")
// });

// console.log(ans1);

// let ans2 = courses.find(function(course){
//     return (course.courseName == "Full Stack java Android")
// });

// //It will print undefined because it is not present
// console.log(ans2);

//concept of Arrow function Let's understand
//Normal idea to create a function
// function side(a){
//     return a*a;
// }
// console.log(side(7));

//Method 2:
//  let side = function (a){
//     return a*a;
// }
// console.log(side(7));

//Method 3: = By using Arrow function
// let side = (a)=>{
//     return a*a;
// }
// console.log(side(7));

//Method 4:Reduce in arrow function if we have single line of code then remove curly braces
// let side = (a)=>a*a;

// console.log(side(7));

//Method 5:Reduce if a passed parameter is single
// let side = a=>a*a;

// console.log(side(7));

// let ans3 = courses.find(course=>course.courseName == "Full Stack Web Developer"
// );

// console.log(ans3);

//3.Removing Element from the array

//we can remove element from beginning,end and middle
// let numbers = [1,2,3,4,5,6];
// //1.beginning -> use array_name.shift()
// numbers.shift();
// console.log(numbers);

// //2.Middle -> use array_name.splice(startNum,deleteCount)
// numbers.splice(2,1);
// console.log(numbers);

// //3.End -> use array_name.pop()
// numbers.pop();
// console.log(numbers);

//4.Empty an array

//Method1: array_name = []
// let numbers1 = [1,2,3,4];
// numbers1 = [];
// console.log(numbers1);

//But what will happen if we store numbers1 in numbers2 and numbers1=[];

// let numbers1 = [1,2,3,4];
// let numbers2 = numbers1;
// numbers1 = [];
// console.log(numbers1);

// //numbers2 will not be empty
// console.log(numbers2);

//Method2:length = 0 considered as good practice
// let numbers1 = [1,2,3,4];
// let numbers2 = numbers1;
// numbers1.length = 0;
// console.log(numbers1);

// //numbers2 will also be empty
// console.log(numbers2);

//Method 3: by using splice() 
// let numbers1 = [1,2,3,4];
// let numbers2 = numbers1;
// numbers1.splice(0,numbers1.length);
// console.log(numbers1);

// //numbers2 will also be empty
// console.log(numbers2);

//Method 4: c++ wala idea by using looping 
// let numbers1 = [1,2,3,4];
// let numbers2 = numbers1;

// while(numbers1.length){
//     numbers1.pop();
// }
// console.log(numbers1);

// //numbers2 will also be empty
// console.log(numbers2);

//5.combining and slicing array

//1.combining
 
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];

// //combining by using concat()
// let concated = num1.concat(num2);
// //output will be 1,2,4,5,6,7,8,9,10
// console.log(concated);

//2.slicing 
//Method1:By using slice(staring_index,ending_index) 
//starting index -> Include
//ending index -> Exclude
// let num = [1,2,3,4,5,6,7];
// let sliced = num.slice(2,7);
// console.log(sliced);.

// NOTE -> Above combining and slicing oprations was performed on primitives value

//combining and slicing on reference value

// let info1 = [
//     {no:1,naam:"Love"},
//     {no:2,naam:"Babbar"},
//     {no:3,naam:"Bhaiya"}
// ];
// console.log(info1);


// let info2 = [
//     {no:1,naam:"Lakshya"},
//     {no:2,naam:"Kumar"},
//     {no:3,naam:"Bhaiya"}
// ];

// console.log(info2);

// //Let's perform combinig operation
// let combinedInfo = info1.concat(info2);

// //yes we can perform concat() on reference
// console.log(combinedInfo);

//Slicing on the reference

// let combinedInfo = [
//     {no:1,naam:"Love"},
//     {no:2,naam:"Babbar"},
//     {no:3,naam:"Bhaiya"},
//     {no:1,naam:"Lakshya"},
//     {no:2,naam:"Kumar"},
//     {no:3,naam:"Bhaiya"}
// ];
// console.log(combinedInfo);

// //yes we can perform slice() on the references
// let slicedInfo1 = combinedInfo.slice(0,3);
// console.log(slicedInfo1);

// let slicedInfo2 = combinedInfo.slice(3);
// console.log(slicedInfo2);

//6.Spread operator(...) or method 2 of combinig 

// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8];

// let combined = [...num1,...num2];
// console.log(combined);

//some adding
// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8];

// let combined = [...num1,'Love',...num2,'Babbar'];

// //ans will be [1,2,3,4,'Love',5,6,7,8,'Babbar']
// console.log(combined);

// //we can create copy by using spread operator
// let copy = [...combined];
// //ans will be [1,2,3,4,'Love',5,6,7,8,'Babbar']
// console.log(copy);

//7.Iterating an array 
//Method1:By using for-of loop

//NOTE1-> for-of loop only use on iterable e.g-Array,Map 
//NOTE->for-in loop only use on non iterable e.g-Object
// let num = [1,2,3,4,5,6];
// for(let x of num){
//     console.log(x);
// }.

//Method2:for-each loop which is very very important 

//NOTE->we need to write callback function at time of using for each loop

//NOTE2-> for each matlab har ek element ke sath karna kya chahte ho aur kuchh nahi

// let num = [1,2,3,4,5,6];
// num.forEach(function(number){
//     console.log(number)
// });

//by using arrow function
// let num = [1,2,3,4,5,6];
// num.forEach((number)=> console.log(number));

//Let's play with for each loop
// let num = [1,2,3,4,5,6];

// //To find sum of entire element of the num
// let sum = 0;
// num.forEach((value)=>sum+=value);
// console.log(sum);

// //To find max value from num
// let maxi = -Infinity;
// num.forEach((value)=>maxi = Math.max(maxi,value));
// console.log(maxi);

// //To find min value from num
// let mini = Infinity;
// num.forEach((value)=>mini = Math.min(mini,value));
// console.log(mini);


//8.joining Array By using join('separator')
//separator may be tab, comma, new line etc.

// // let numbers = [1,2,3,4,5,6];
// let joined = numbers.join(',');

// //ans will be 1,2,3,4,5,6
// //typeof(joined) -> will be string
// console.log(joined);

//concept of split(kis base pr)

// let message = 'This is my first message';
// let splited = message.split(' ');

// //typeof(joined) -> will be object
// console.log(splited);

//9. Sorting Array
//By default sort function is string

//sort function on string
// let fruits = ['Banana','Apple','Guava','Orange'];
// fruits.sort();
// console.log(fruits);

//sort function on numbers

// let unsorted = [4,3,10,5,30,2,1];
//  unsorted.sort(function(a,b){
//     return a-b;
//  });
// console.log(unsorted);

//sort() use on the references

// let info1 = [
//     {id:1,naam:'Love'},
//     {id:6,naam:'Babbar'},
//     {id:3,naam:'Bhaiya'},
// ];
// console.log(info1);

// info1.sort();
// console.log(info1);

//reverse()

// let num = [1,2,3,4,5,7];
// num.reverse();
// console.log(num);

//10.Filtering array -> by using filter()
//Syntax: arrayName.filter(callback function)

// let num = [1,2,-1,-2,4,-3];
// let filtered1 = num.filter(function(value){
//     return value < 0;
// });

// console.log(filtered1);

// let filtered2 = num.filter((value)=>value >= 0);
// console.log(filtered2);

// //chalo kuchh alag karte hai
// let sum = 0;
// filtered2.forEach((value) => sum+=value);

// console.log(sum);

//11.Mapping Arrays
//map() -> it is used to map array each element to something else

// let num = [1,3,2,5,6];
// let mapped = num.map((value) => value*10);
// console.log(mapped);
// console.log(num);.

//map number with string
//let num = [1,2,3,4,5];
// let mapped = num.map((value)=>"student_no"+value);
// console.log(mapped);

//12.Mapping with object
// let num = [1,2,3,-5];
// let filtered = num.filter((value) => value >= 0);
// // let mapped1 = filtered.map((num) =>{
// //     let obj = {value:num};
// //     return obj;
// // });

// //console.log(mapped1);
// let naam1 = 'Love';
// let mapped2 = filtered.map((value)=>{
//     let obj = {no:value,naam:`${naam1}`};
//     return obj;
// });

// console.log(mapped2);

//concept of chaining which is basically used for reduce no of code
// let num = [1,2,3,-5];
// let filtered = num.filter((value) => value >= 0);
// let mapped1 = filtered.map((num) =>{
//     let obj = {value:num};
//     return obj;
// });

// console.log(mapped1);

// //or i can write that in below form of the above code
// let mapped2 = num.filter((value) => value >= 0).map((num) =>{
//     let obj = {value:num};
//     return obj;
// });

// console.log(mapped2);

//Above both code are same bhai yahi to chaining aur kya hai babbar bhaiya hai to sab kuchh possible hai

//Dhanyabad everyone milte ho next lecture me