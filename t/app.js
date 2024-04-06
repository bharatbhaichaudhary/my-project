// console.log(NaN === NaN);
// console.log(Number.NaN===NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// Assignment

// let a = 5;
// let b = 5;
// console.log(5==5 );
// console.log(a += 10);

// arithmetic
// let a = 4
// let b = 10
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(++a);
// console.log(--a);

//comparison

// let ab = 10
// let c = 100

// console.log(a==b);
// console.log(ab<c);
// console.log(ab>c);
// console.log(10 === 100);
// console.log(10 != 1);

// logical

// console.log((20==20)&&(10<100));
// console.log(2==1 || 2==2);
// console.log(2===1 ?? 2===2)

//jasjosj

// console.log(3**5);

// let a = 5;
// let b = 10;

// b= b-a
// a= a+b
// console.log(a);

// var a = "rrr";

// if(a=="rrr"){
// console.log("1234");
// }else{
// console.log("dddd");
// }

// var year = 2020

// if(year%4 === 0){
//    if(year%100 === 0){
//      if(year%400 === 0){
//       console.log("ha");
//      }else{
//       console.log("no");
//      }
//    }else{
//     console.log("ha");
//    }
// }else{
//   console.log("no");
// }

// if(a=NaN){
//   console.log("123");
// }else{
//   console.log("uuu");
// }
// let a = "wq"
// switch(a){
//   case 'q':
//     console.log("q");
//     break;
//   case 'w' :
//     console.log("w");
//     break;
//   default:
//     console.log("noooooooo");
// }
// let a = 0;

// while(a <= 10){
//   console.log(a);
//   a++
// }

// let a =0;

// do{
//   console.log(a);
//   a++
// }while(a <= 10)

// for(let a = 0; a<= 100; a++){
//   console.log(a);
// }

// for()

// let y = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("tiuqw");
//     reject("hh");
//   }, 4000);
// });

// function abc() {
//   let myPromise = y;
//   console.log(11);
//   console.log(myPromise);
//   console.log(y);
//   console.log(12);
// }
// abc();
// async function abc() {
//   try {
//     let myPromise = await fetch("url", {
//       method: "POST", //POST,DELETE, PUT, PETCH
//       body: {
//         name: "Bharat",
//       },
//       headers: {
//         auth: "bear fdhuvJHjJGcE^$%^vhuyrfasbfclkkhy9IUV%$3vjhg",
//       },
//     });
//     let data = await myPromise.json();
//     console.log(myPromise);
//   } catch (err2) {
//     console.log(err2);
//   }
// }
// abc();

// const abc2=async()=>{
//   try{
//    const asdas= await fetch("url",{
//       method:"GET",
//       body:JSON.stringify({
//         name:"bharat",
//         mo:6662626262,
//       }),
//       headers:{
//         auth:"ber jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
//       }
//     })
//    const dara = await asdas.json()
//    console.log(dara);
//   }catch(erre){
//     console.log(erre);
//   }
// }


// for(let i = 1; i<=10;i++){
//   let a = 8;
//   console.log(a + "*" + i+ "=" +(a*i));
// }


// let a =["mm","a","s","d","wwwww","a","s"]

// console.log(a.lastIndexOf("a",5));

// const sum = (a,b) =>{
//     let result = `thi sum of ${a} and ${b} is ${a+b}`;
//     console.log(result);
// }

// sum(22,4)


// function calculator(num1, num2, op){
//     let result;
//     switch(op){
//         case "+":
//             return num1 + num2;
//         break
//         case "-":
//             return num1 - num2;
//         break
//         default: return'no....'
//     }
// }

// console.log(calculator(5,2,"%"));


// const isReverse = (str) =>{
//     let r = "";
//    for(let i=str.length-1; i>= 0; i--){
//     r = r+ str[i]
//    }
//    return r
// };
// console.log(isReverse("bharat chaudhary"));


// let a = ["bharat","hitesh","vipul"]

// console.log(a.at(-1));
// console.log(typeof(a));


// let f = new Array("bharat","vvvvv","ehohohef");
// let f = [ 'bharat', 'vvvvv', 'ehohohef' ]
// f[1]="bbbb"
// console.log(f);


// let abcd = ["a","b","c",'d','e']


// abcd.map((c, i, a)=>{
//     console.log(c);
// });

// let abcd = "bharat"
// for(let a of abcd){
//     console.log(a);
// }
// for(let a in abcd){
//     console.log(a);
// }


// const n = [1,2,3,4,5,6]



// console.log(n.slice(2,4));
// console.log(n);
// n.unshift();


// n.forEach((c)=>{
//     console.log(c*2);
// })

// const db=n.map((c)=>{
//     return c*2;
// })

// console.log(db);

// var myAge = 23;
// console.log(myAge);



// var my_fistName ="bharat"
// console.log(my_fistName);

// var _myLastName ="chaudhary"
// console.log(_myLastName);

// var 123myAge =23;
// console.log(123myAge);

// var $cityName ="New York"
// console.log($cityName);

// var my@Email ="bharatch6353@gmail.come"
// console.log(my@Email);


// let name = "bharat"
// console.log(typeof(name));

// let age = 23;
// console.log(typeof(age));

// let a;
// console.log(typeof(a));

// let arr = [];
// console.log(typeof(arr));


// let a = "20"
// console.log(typeof(+a));
// console.log(typeof Number(a));

// let str = 5;
// console.log(typeof String(str));
// console.log(typeof(str+""));

// let myName = true
// if(myName){
//     console.log("this is trurhy value");
// }else{
//     console.log("its a falsy value");
// }

// let myString = "42.5"
// let myNumber = parseInt(myString)
// console.log(myNumber);
// console.log(typeof(myNumber));
// let newMyNumber = parseFloat(myString)
// console.log(newMyNumber);


// console.log(parseInt("123"));
// console.log(parseInt("123",10));
// console.log(parseInt("   123"));
// console.log(parseInt("023"));
// console.log(parseInt("12.3"));


// console.log(parseInt("&123"));
// console.log(parseInt("-123"));
// console.log(parseFloat("123"));
// console.log(parseInt("zxc"));

// console.log(isNaN(true));


// if(NaN === NaN){
//     console.log("velid");
// }else{
//     console.log("not valid");
// }

// console.log(10 + "20");
// console.log(9-"5");
// console.log("Java"+"Script");
// console.log(""+0);
// console.log("bharat"-"chaudhary");
// console.log(true+true);
// console.log(true+false);


// let myFavNum = 13;


// let x = 5;
// let y = 10;
// let z = x+y;

// console.log(z);


// let result = "hello" / 2 ;
// console.log(result);


// let result = 0.1 + 0.2;
// console.log(result.toFixed(1));

// console.log(5 == 5);

// let a = "";
// console.log(!a);


// let Age = 22;
// let hadDrivingLicense = true;

// if(Age >= 18 && hadDrivingLicense ==true ){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let age =12;
// let result = age >= 18 ? "yes":"no";
// console.log(result);

// let score = 100;
// let result = score >= 60? "pass":"nopass";
// console.log(result);

// console.log("5"-3);
// console.log(2 <12 <5);
// console.log("20"+10+10);

// let temp = 22;

// if(temp > 30){
//     console.log("let's go to beach");
// }else{
//     console.log("Watch TV at Home");
// }

// let t = 22;

// if(t>=30){
//     console.log(123123);
// }else if(t>=20 && t<30){
//     console.log("yshe");
// }else{console.log("no");}

// let userAge = 22;
// let isCitizen = false;
// let isRegistered = true;

// if(userAge >= 18){
//   if(isCitizen){
//     if(isRegistered){
//      console.log("you are eligible to vote");
//     }else{
//         console.log("you are not eligible due to registration status");
//     }
//   }else{
//     console.log("you are not eligible due to citizenship status");
//   }
// }else{
//     console.log("you are not eligible lote");
// }

// let num = 11;

// if(num%2 == 0){
//     console.log("num is even");
// }else{
//     console.log("num is odd");
// }

// let num = -1;

// if(num == 0){
//     console.log("num is zero");
// }else if(num > 0){
//     console.log("num is positive");
// }else{
//     console.log("num is nagetive");
// }

// let day = "www";

// switch(day){
//     case "monday": console.log(1);
//     break
//     case "friday": console.log(5);
//     break
//     case "sunday": console.log(111111);
//     break
//     default :console.log(0);
// }


// let areaOfShapes = "rectangle";
// let a=5;
// let b =10;
// let result;
// switch(areaOfShapes){
//     case "squre":result = a*a;
//     console.log(result);
//     break;

//     case "circle":
//         let r = 2;
//         result=3.142 * (r*r)
//     console.log(result);
//     break;

//     case "rectangle":result=a*b
//     console.log(result);
//     break;
//   default:
//     console.log("no shape matchs");
// }


// let i = 0;

// while(i<=10){
//     console.log(i);
//     i++;
// }
// console.log(`<hr></hr>`);
// let b = 0;
// do{
//     console.log(b);
//     b++;
// }while(b<=10)


// for(let a=0; a<=10; a++){
//     console.log(a);
// }

// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// let num = 1;

// do{
//     console.log(num);
//     num++;
// }while(num <= 10)

// let num =1;
// while(num <= 10){
//     // console.log('5 * ' +num+' = '+ (5*num));
//     console.log(`5 * ${num} = ${5*num}`);
//     num++
// }

// let userInput;
// let positiveNumber;

// do{
//     userInput= prompt("enter any positive number");
//     positiveNumber = parseFloat(userInput)
// }while(isNaN(positiveNumber) || positiveNumber < 0)
// console.log("You entered a valid positive number:",positiveNumber);

// var sum =0;
// for (let num = 1; num <= 10; num++){
//     var sum = sum+num;
    
// }
// console.log(sum);

// let num = 13;
// var isPrime = true;

// for(let i = 2; i<num; i++){
//     if(num % i === 0){
//         isPrime= false;
//         break
//     }
// }

// if(isPrime){
//     console.log("num is prime");
// }else{
//     console.log("num is not prime");
// }

// let year = 2023;

// if((year % 4 === 0 && year % 100 !== 0) || (year % 4 ===0)){
//   console.log("it's a leap year");
// }else{
//     console.log("it's not a leap year");
// }

// for(let i = 1; i<=5; i++){
//     var pattern = ""
//     for(let j = 1; j<=i; j++){
//         pattern = pattern + " *"
//     }
//     console.log(pattern);
// }

// function sum(a,b){
//     return a*b
// }
// console.log(sum(10,2));

// function gree(name){
//   console.log(`Hello ${name}, Welcome to JS course`);
// }

// gree("bharat")
// gree("vipul")

// const result = function greet(name){
//     console.log(`Hello ${name}, Welcome to JS course`);
// }

// result("bharat chaudhary")

// (function(){
//     console.log("bharat");
// }())

// (function(a,d){
//     console.log(a*d);
// }(5,9))

// var name = "bharat";

// if(true){
//     var name = "vipul"
//     console.log(name);
// }
// name = "patel"
// console.log(name);

// let name = "bharat";

// if(true){
//     let name = "vipul"
//     console.log(name);
// }
// // name = "patel"
// console.log(name);

// const name = "bharat";

// if(true){
//     const name = "vipul"
//     console.log(name);
// }
// name = "patel"
// console.log(name);

// let fName = "bharat";
// let lName = "chaudhary";
// let fullName=`${fName} ${lName}`;
// console.log(fullName);

// function a(a,b=22){
//     console.log(a+b);
// }
// a(9,11)


// const sum =(a,b)=>{
//     let result = `The Sum of ${a} and ${b} is ${a+b}`
//     console.log(result);
// }
// sum(22,3)

// const calculator = (num1,num2,operator)=>{
//   let result;
//   switch(operator){
//     case "+": return  num1+num2;
//     break

//     case "-": return  num1-num2;
//     break

//     case "*": return  num1*num2;
//     break

//     case "/": return  num1/num2;
//     break
    
//     default: return "no operator"
//   }
// }
// console.log(calculator(22,2,"*"));

// const isReverse = (str)=>{
//     let result="";
//     for(let char = str.length-1; char>= 0; char--){
//         result = result+ str[char]
//     }
//     return result
// };
// console.log(isReverse("bharat patel"));

// const isPalindrome = (str)=>{
//     let revurse = "";
//     for(let char = str.length-1; char>= 0; char--){
//         revurse = revurse + str[char];
//     }
//     // if(str === revurse){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return str === revurse ? true : false;

// };
// console.log(isPalindrome("level"));








// let arry = ["bharat","ram","sita","gita"];
// let arry1 = [1,2,3,4,5,6,7,1,2,3,4,5,11,22];
// let arry2 = ["a",'b','c','d','e',"a"];
// let arry3 = ["apple",'banana','orange'];


// const result = arry.map((c)=>{
//     return c.toUpperCase();
// })
// console.log(result);
// console.log(arry.sort());
// console.log(arry1.sort());
// console.log(arry2.sort());

// let a = 5;
// const nub = arry1.filter((c)=>{
//     return c !== a;
// });
// console.log(nub);

// const r = arry1.filter((c)=>{
//     return c > 5;
// })
// console.log(r);

// let a = arry1.findIndex((a)=>{
//     return a> 2;
// })
// console.log(a);
// let arry4 = arry1.find((c)=>{
//   return c > 7;
// })
// console.log(arry4);
// console.log(arry1.includes(3,-4));
// console.log(arry.includes("bharat"));
// console.log(arry.indexOf("ram",6));
// console.log(arry1.indexOf(3,2));
// console.log(arry2.indexOf("a",2));
// console.log(arry1.lastIndexOf(4,-3));
// console.log(arry3.lastIndexOf("banana"));

// arry3.splice(0,3);
// console.log(arry3);
// arry2.splice(3,2,"z",'x',"v")
// console.log(arry2);
// arry.splice(1,0,"patel")
// console.log(arry);
// arry1.splice(3,2,12,34,555,666)
// console.log(arry1);
// console.log(arry1.shift());
// console.log(arry1);
// console.log(arry.shift());
// console.log(arry);
// console.log(arry3.unshift("leamn"));
// console.log(arry3);
// console.log(arry2.unshift("z"));
// console.log(arry2);
// console.log(arry1.unshift(0));
// console.log(arry1);
// console.log(arry.unshift("govind"));
// console.log(arry);
// arry3.pop();
// console.log(arry3);
// arry2.pop();
// console.log(arry2);
// arry1.pop();
// console.log(arry1);
// arry.pop();
// console.log(arry);
// arry3.push("locki")
// console.log(arry3);
// arry2.push("f")
// console.log(arry2);
// arry1.push(8);
// console.log(arry1);
// arry.push("govind")
// console.log(arry);
// const newArry = arry.map((c,i,a)=>{
//     return (a)
// })
// console.log(newArry);
// arry3.forEach((c,i,a)=>{
//     console.log(c);
//     console.log(i);
//     console.log(a);
// })

// arry2.forEach((c,i,a)=>{
//     // console.log(c);
//     // console.log(i);
//     // console.log(a);
// })

// arry1.forEach((cVelue,index,array)=>{
//     console.log(cVelue,index,array);
// })
// arry.forEach((c,i,a)=>{
//     // console.log(c,i,a);

// })
// for(let i = 0;i<=arry.length-1; i++){
//     console.log(arry[i]);
// }
// for(let i of arry){
//     console.log(i);
// }

// for(let i of arry1){
//     console.log(i);
// }

// for(let i of arry2){
//     console.log(i);
// }

// for(let a of arry3){
//     console.log(a);
// }

// for(let i in arry){
//     console.log(i);
// }

// for(let a in arry1){
//     console.log(a);
// }

// for(let z in arry2){
//     console.log(z);
// }

// for(let ss in arry3){
//     console.log(ss);
// }
// arry[4]="abcd"
// arry[5]="nnq"
// arry[0]="lalit"
// arry[3]="ramesh"
// arry[1]="lofi"
// console.log(arry);
// console.log(arry[0]);
// console.log(arry[1]);
// console.log(typeof arry);
// console.log(arry.at(-2));
// console.log(arry.length);

// let fruits = new Array("apple",'orange','banana')
// console.log(fruits);


// const arry = [1,2,3,4,5];

// arry.forEach((a)=>{
//     console.log(a * 2);
// })

// const arry1 = arry.map((b)=>{
//     return b * 2
// })
// console.log(arry1);


// const months = ["jan",'march','april','june','july'];
// console.log(months.splice(months.length,0,"dec"));
// console.log(months);
// months.splice(1,1,"March")
// console.log(months);
// months.splice(4,1)
// console.log(months);




// const products = [
//     {name:"laptop",price:1200},
//     {name:"phone",price:800},
//     {name:"tablet",price:300},
//     {name:"tv",price:150},
// ];


// const f = products.filter((c)=>{
//     return c.price <= 500;
// })
// console.log(f);

// const numbers = [1,2,3,4,6,5,6,7,8];
// let uniqueValue = numbers.filter((c,i,a)=>{
//  return a.indexOf(c) === i;
// });
// console.log(new Set(numbers));
// console.log(uniqueValue);

// numbers.sort((a,b)=>{
//     if(a>b) return -1
//     if(a>b) return 1
// });
// console.log(numbers);

// const result = numbers.map((c)=> c*c);
// console.log(result);

// const numbers = [1,2,3,4,5,6];

// const result = numbers.map((c)=>{
//     if(c % 2 === 0){
//         return c * c;
//     }
// })
// .filter((c)=>{
//     c !== undefined
// });
// console.log(result);

// const array1 = ['bharat','vipul','geeta','naresh']

// const result = array1.map((c)=>{
//     return `mr ${c}`
// });
// console.log(result);

// const products = [100,200,300,1000,2300];

// const totole = products.reduce((z,c,i,a)=>{
//     return z+c
// },0);
// console.log(totole);


// const numbers = [1,2,3,4,5];

// const totale = numbers.reduce((a,c)=>{
//     return a+c
// },0);
// console.log(totale);

// const str = 'hello, world!';

// // console.log(str);
// // console.log(str.indexOf("world"));
// const a = Array.from(str);
// console.log(a);

// const aaa = a.map((c,i)=> `${c}-${i}`);
// console.log(aaa);

// let text = 'Hello JavaScript, Welcome to world best JavaScript code'
// let name = 'bharat';
// let lName = 'chaudhary';



// console.log(name.split("").reverse());
// console.log(text.split(" "));
// console.log(lName.trim());
// console.log(text.toLocaleLowerCase());
// console.log(text.toUpperCase());
// console.log(name.toUpperCase());
// console.log(text.replace("JavaScript",name));
// console.log(text.charAt(22));
// console.log(name.charAt(5));
// console.log(lName.charAt(7));
// console.log(name.at(-3));
// console.log(text.charCodeAt(6));


// console.log(text.replaceAll('JavaScript','aaakjkjbljvhv'));
// console.log(text.slice(-2));
// console.log(text.substring(1,7));
// console.log(text.slice(1,7));
// console.log(text.endsWith('e'));
// console.log(text.startsWith("Hello J"));
// console.log(text.includes("ww"));
// // const result = text.match(/JavaScript/g)
// const result = text.matchAll('JavaScript')
// console.log(...result);
// let index = text.lastIndexOf("JavaScript",20)
// console.log(index);

// const a = text.search("JavaScript")
// console.log(a);



// for(let i = 65; i <= 90; i++){
//    console.log(String.fromCharCode(i));
// }


// for(let i = 65; i <=90; i++){
//     console.log(String.fromCharCode(i));
// }


// const checkAllVowelPresentOrNot = (str)=>{
//     const vowel = "aeiou"
//   for(let char of vowel){
//     //  console.log(str.includes(char));
//     if(!str.includes(char)){
//         return false;
//     }
//   }
//   return true;
// };
// // console.log(checkAllVowelPresentOrNot("my name is bharat chaudhary"));


// const countVowels =(str)=>{
//   const vowels = 'aeiou';
//   let count = 0;
//   for(let char of str){
//     // console.log(char);
//     if(vowels.includes(char)){
//         return count++;
//     }
//   }
//   return count;
// };
// console.log(countVowels("bharat chaudhary"));



// const countVowels = (str)=>{
//     const vowels = "aeiou";
//     let count = 0;
//     for(let char of str){
//         if(vowels.includes(char)){
//            return count++;
//         }
//     }
// return count;
// };
// console.log(countVowels("bhatrat chaudhary"));

// const pangramCodeker = (str)=>{
//     let inputArr = str.toLowerCase().split('');

//     const values = inputArr.filter((curElem)=>  curElem.charCodeAt() >= "a".charCodeAt() &&  curElem.charCodeAt() <= "z".charCodeAt() );
//     console.log(values);
//     console.log([...new Set(values)]);
// };
// pangramCodeker("The quick brown fox jumps ove the lazy dog")


// let a = 11111.4;
// console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));


// let number = 1.5;
// console.log(Math.round(number));

// console.log(Math.abs(-3));

// console.log(Math.pow(99,66));

// console.log(Math.random()*80000);