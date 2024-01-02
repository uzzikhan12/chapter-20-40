// chapter 21 (changing case)

// q1

// var allLower = userInput.toLowerCase();
// () are missing in this question


// q2

// var x = "XYZ";
// var x = x.toLowerCase();
// console.log(x);


// q3

// var y = "xyz";
// var y = y.toUpperCase();
// console.log(y);


// q4

// var y = "xyz";
// var z = y.toUpperCase();
// console.log(z);


// q5

// var arr = ["karachi"];
// var a = arr[0].toLowerCase();
// console.log(a);


// q6

// var a = "hello world";
// var b = a.toUpperCase();
// alert(b);


// q7

// var cityName = "karachi";
// var firstLetter = cityName.slice(0,1);
// var firstLetter = firstLetter.toUpperCase();

// var otherLetter = cityName.slice(1);
// var otherLetter = otherLetter.toLowerCase(1);

// var words = firstLetter + otherLetter;
// console.log(words);



// chapter 22 - 25 (strings)


// q1

// var sameWords = "captain";
// var slicedResult = sameWords.slice(1, 3);
// console.log(slicedResult);


// q2

// var sameWords = "captain";
// var result = sameWords.length;
// console.log(result);


// q3

// var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg);


// q4


// var animal = "elephant";
// var seg = animal.slice(2,6);
// var count = seg.length;
// console.log(seg , count);


// q5

// var text = "to be or not to be";
// var count = text.length;
// console.log(count);

// var firstLetter = text.slice(0,1);
// var lastLetter = text.slice(14);

// var words = firstLetter + lastLetter;
// console.log(words);


// q6

// var text = "to be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);//answer is 3


// q7

// var text = "to be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);//answer is 16


// q8

// var text = "Let's go, go, go!";
// var indx = text.lastIndexOf("go");
// console.log(indx);


// q9

// var myString = "Hello, World!";
// var indexNum = 7;

// if (indexNum >= 0 && indexNum < myString.length) {
//     console.log("Segment exists at index " + indexNum);
// } else {
//     console.log("Segment does not exist at index " + indexNum);
// }


// q10

// var myString = "abcde";
// var charIdx = myString.charAt(2);

// console.log(charIdx);


// q11

// var text = "this is an example text";
// var cha = text.charAt(9);
// console.log(cha);


// q12

// var str = "Hello, World";
// var x = str.charAt(str.length - 1);
// console.log(x);


// q13

// var example = "Example";
// var cha = example.charAt(4);
// console.log(4);


// q14

// var myString = "example";
// var targetCharacter = "a";

// if (myString.charAt(2) === targetCharacter) {
//     console.log("The 3rd character is " + targetCharacter);
// } else {
//     console.log("The 3rd character is not " + targetCharacter);
// }


// q15

// var reply = "no, I don't agree with that, no way!";
// var charArray = [];

// for (var i = 0; i < reply.length; i++) {
//     charArray[i] = reply.charAt(i);
// }

// var revisedReply = reply.replace("no", "yes");
// console.log(charArray);
// console.log(revisedReply);


// q16

// var str = "12345 is the number 1";
// var newStr = str.replace("1", "one");

// console.log(newStr);


// q17

// var x = "aaa is an example string with a few a's";
// var y = x.replace("a", "z");
// console.log(y);


// chapter 26 rounding num

// q1

// var value = 1.655;
// var roundNum = Math.round(value);
// console.log(roundNum);


// q2

// var origNum = 4.25;
// var roundNum = Math.ceil(origNum);
// console.log("The rounded-up number is: " + roundNum);


// q3

// var origNum = 4.67;
// var roundNum = Math.floor(origNum);
// console.log("The rounded-down number is: " + roundNum);


// q4

// var originalNum = 6.45;
// var roundNum = Math.round(originalNum);

// console.log("original num is =",originalNum);
// console.log("rounded num is =",roundNum);


// q5

// var originalNum = 0.5;
// var roundNum = Math.floor(originalNum);

// console.log("original num is =",originalNum);
// console.log("rounded num is =",roundNum);


//chapter 27 (random num) 

// q1

// var randomNum = Math.random()*50;
// console.log(randomNum);


// q2

// var randomNum = Math.random();
// console.log(randomNum);


// q3

// var a = Math.random();
// var b = Math.ceil(a * 6);
// console.log(b);


// q4

// function coinToss() {
//     var randomNumber = Math.random();
//     var result = randomNumber < 0.5 ? "Heads" : "Tails";
//     return result;
// }
// var tossResult = coinToss();
// console.log("Coin toss result: " + tossResult);



// chapter 28 29

// q1


// var a = 100.99 ;
// var b = +a ;
// var b = Number(a);
// var b = perseInt(a);
// var b = perseFloat(a);
// console.log(b);


// q2

// function stringToInteger(str) {
//     return parseInt(str, 10);
// }
// var result = stringToInteger("123");
// console.log(result);
    
    
// q3

// var a = 100.99 ;
// var b = perseFloat(a);


// q4

// You can use parseInt() or parseFloat() and check if the result is NaN (Not a Number). If the result is NaN, the conversion was not successful.


// q5

// var a = [5, 10, 12];
// var b = a.toString();
// console.log(typeof b);


// q6

// var a = 42;
// var b = a.toString();
// console.log(b,typeof b);


// q7

// var decimalString = "3.14";
// var integerValue = parseInt(decimalString);
// console.log(integerValue);


// chapter30 (controlling the length of decimal)

// q1

// var a = 1.1234567;
// var newNum = a.toFixed(4).toString();
// console.log(newNum);


// q2

// var myNumber = 7.896;
// myNumber = Number(myNumber.toFixed(2));
// console.log(myNumber);


// q3

// var num = 123.456789;

// if (num.toFixed(2).toString().length > 4) {
//     console.log("The number has more than 4 characters.");
// } else {
//     console.log("The number does not have more than 4 characters.");
// }


// q4

// var bigNumber = 123.4567890123456789;
// alert(bigNumber.toFixed(2).toString());


// chapter 31 - 34 (date and time)

// q1

// var dObj = new Date();


// q2

// var dStr = new Date().toString();


// q3

// var d = new Date();
// var day = d.getDay();


// q4

// var d = new Date();
// var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var currentDayIndex = d;

// if (currentDayIndex >= 0 && currentDayIndex < dayNames.length) {
//   alert(dayNames[currentDayIndex]);
// } else {
//   alert("Invalid day index");
// }


// q5

// var currentDate = new Date();
// var dateParts = {
//   year: currentDate.getFullYear(),
//   month: currentDate.getMonth(),
//   day: currentDate.getDate(),
//   hours: currentDate.getHours(),
//   minutes: currentDate.getMinutes(),
//   seconds: currentDate.getSeconds(),
//   milliseconds: currentDate.getMilliseconds()
// };


// q6

// var later = new Date(2020, 11, 31, 23, 59, 59, 999);
// console.log(later);


// q7

// var specificDate = new Date(1992, 1, 2);
// console.log(specificDate);


// q8

// var referenceDate = new Date(1970, 0, 1);
// var beginningOf1980 = new Date(1980, 0, 1);
// var millisecondsElapsed = beginningOf1980 - referenceDate;

// alert(millisecondsElapsed);


// q9

// var originalDate = new Date('2022-01-01');
// originalDate.setFullYear(2023);
// console.log(originalDate);


// q10

// function setToJanuary(inputDate) {
//     var newDate = new Date(inputDate);
//     newDate.setMonth(0);  
//     return newDate;
// }
  
// var originalDate = new Date('2022-07-15');
// var updatedDate = setToJanuary(originalDate);
  
// console.log(updatedDate);


// q11

// function setDayOfWeek(inputDate, newDay) {
//     var newDate = new Date(inputDate);
//     newDate.setDate(newDay);  
//     return newDate;
// }

// var originalDate = new Date('2022-07-15');
// var updatedDate = setDayOfWeek(originalDate, 3);
  
// console.log(updatedDate);
  

// q12

// function changeMinutesInTime() {
//     var inputTime = prompt("Enter the time in HH:mm format:");
//     var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
//     if (!timeRegex.test(inputTime)) {
//       alert("Invalid time format. Please enter time in HH:mm format.");
//       return;
//     }

//     var newMinutes = prompt("Enter the new minutes:");
  
//     if (isNaN(newMinutes) || newMinutes < 0 || newMinutes > 59) {
//       alert("Invalid minutes. Please enter a valid minute value (0-59).");
//       return;
//     }
  
//     var [hours, oldMinutes] = inputTime.split(':');
//     var updatedTime = hours + ':' + newMinutes;

//     alert("Original Time: " + inputTime + "\nUpdated Time: " + updatedTime);
// }
  
// changeMinutesInTime();
  

// q13

// function addHoursToTime() {
//     var inputTime = prompt("Enter the time in HH:mm format:");
//     var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
//     if (!timeRegex.test(inputTime)) {
//       alert("Invalid time format. Please enter time in HH:mm format.");
//       return;
//     }
//     var hoursToAdd = prompt("Enter the number of hours to add:");
//     if (isNaN(hoursToAdd) || hoursToAdd < 0) {
//       alert("Invalid hours. Please enter a valid positive number of hours.");
//       return;
//     }
//     var [hours, minutes] = inputTime.split(':');
//     var totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    
//     totalMinutes += parseInt(hoursToAdd) * 60;
    
//     var newHours = Math.floor(totalMinutes / 60);
//     var newMinutes = totalMinutes % 60;
//     var updatedTime = (newHours < 10 ? '0' : '') + newHours + ':' + (newMinutes < 10 ? '0' : '') + newMinutes;
  
//     alert("Original Time: " + inputTime + "\nUpdated Time: " + updatedTime);
// }
  
// addHoursToTime();
  

// q14

// function calculateAge() {
//     var birthYear = prompt("Enter your birth year:");

//     if (isNaN(birthYear) || birthYear.length !== 4) {
//       alert("Invalid birth year. Please enter a valid 4-digit year.");
//       return;
//     }
//     var birthMonth = prompt("Enter your birth month (1-12):");

//     if (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
//       alert("Invalid birth month. Please enter a valid month (1-12).");
//       return;
//     }
//     var birthDay = prompt("Enter your birth day:");

//     if (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
//       alert("Invalid birth day. Please enter a valid day (1-31).");
//       return;
//     }
//     var currentDate = new Date();
//     var age = currentDate.getFullYear() - birthYear;
  
//     if (
//       currentDate.getMonth() + 1 < birthMonth ||
//       (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() < birthDay)
//     ) {
//       age--;
//     }
//     alert("Your age is: " + age);
//   }
//   calculateAge();
  

// chapter 35 -37 (functions)

// q1

// function displayAlert() {
//     console.log("Function displayAlert is executing.");
// }
  

// q2

// function askName() {
//     var userName = prompt("Enter Name");
// }


// q3 

// function callTwoFunctions() {
//     firstFunction();
//     secondFunction();
// }
  
// function firstFunction() {
//     console.log("Executing the first function");
// }  
  
// function secondFunction() {
//     console.log("Executing the second function");
// }
// callTwoFunctions();
  

// q4

// function promptAndAlertName() {
//     var enteredName = prompt("Enter name");
//     alert("Entered name: " + enteredName);
//   }
// promptAndAlertName();
  

// q5

// function concat(a, b, c, variable, str, num) {
//     var result = a + b + c + variable + str + num;
//     console.log(result);
// }
// concat('a', 'b', 'c', 'variableValue', 'stringValue', 42);
  

// q6

// function concatenateParameters(param1, param2) {
//     var result = param1 + param2;
//     console.log("Concatenated result:", result);
// }
// concatenateParameters("Hello", "World");
  

// q7

// function multiplyThreeNumbers(num1, num2, num3) {
//     var result = num1 * num2 * num3;
//     console.log("Result:", result);
// }
// multiplyThreeNumbers(2, 3, 4);
  

// q8

// function calculateAverage(numbers) {
//     var sum = 0;
  
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     var average = sum / numbers.length;
//     return average;
// }
// var numbersArray = [5, 10, 15, 20];
// var averageResult = calculateAverage(numbersArray);
// console.log("Average:", averageResult);
  

// q9

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
//   }
// var sumResult = addTwoNumbers(10, 20);
// console.log("Sum:", sumResult);
  

// q10

// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }  
//     var average = sum / numbers.length;
//     return average;
// }
// var numbersArray = [5, 10, 15, 20];
// var averageResult = calculateAverage(numbersArray);
// console.log("Average:", averageResult);
  

// q11

// var resultVariable = someFunction();


// q12

// function letterCounts(word) {
//     var counts = {};
//     for (var i = 0; i < word.length; i++) {
//       var letter = word[i];
//       counts[letter] = (counts[letter] || 0) + 1;
//     }
//     return counts;
// }

// var wordCounts = letterCounts("hello");
// console.log("Letter Counts:", wordCounts);
  

// q13

// function setYearInDateObject(year) {
//     var date = new Date();
//     date.setFullYear(year);
//     console.log("Date with set year:", date);
//   }
// setYearInDateObject(2022);
  

// q14

// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     return age;
//   }
  
// var ageResult = calculateAge("1990-01-01");
// console.log("Age:", ageResult);
  

// q15

// function isWordPresent(array, word) {
//     return array.includes(word);
//   }
// var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var isPresent = isWordPresent(namesArray, 'raza');
// console.log("Is 'raza' present?", isPresent);
  

// q16

// function repeatLetter(letter, times) {
//     return letter.repeat(times);
//   }
  
// var repeatedLetters = repeatLetter("a", 10);
// console.log("Repeated letters:", repeatedLetters);
  

// q17

// function reverseArray(array) {
//     return array.reverse();
//   }
  
// var originalArray = ['a', 'b', 'c', 'd', 'e'];
// var reversedArray = reverseArray(originalArray);
// console.log("Reversed Array:", reversedArray);
  

// Chapter38 (Local vs. Global Variables)

// q1

// function demonstrateLocalVariable() {
//     var localVar = "I am a local variable.";
//     console.log(localVar);
// }
// demonstrateLocalVariable();
  

// q2

// var globalVar = "I am a global variable.";
// function accessGlobalVariable() {
//   console.log(globalVar);
// }
// accessGlobalVariable();


// chapter 39 - 40

// q1

// function performActionBasedOnVariable(value) {
//     switch (value) {
//       case 1:
//         console.log("Performing action for case 1");
//         break;
//       case 2:
//         console.log("Performing action for case 2");
//         break;
//       case 3:
//         console.log("Performing action for case 3");
//         break;
//       default:
//         console.log("Default action");
//     }
// }
// performActionBasedOnVariable(2);
  

// q2

// function checkCity(cityName) {
//     switch (cityName) {
//       case "New York":
//         alert("User is in New York!");
//         break;
//       case "London":
//         alert("User is in London!");
//         break;
//       case "Paris":
//         alert("User is in Paris!");
//         break;
//       default:
//         alert("City not recognized. Please enter a valid city.");
//     }
// }
// var userCity = prompt("Enter your city:");
// checkCity(userCity);
  