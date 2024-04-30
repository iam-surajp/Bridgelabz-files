                     //--- Sequence Practice Problems--- //

// 1 - Random Function Math.floor(Math.random() * 10); to get Single Digit 
let number = Math.floor(Math.random() * 10);
// console.log(number);

// 2 - Use Random to get Dice Number between 1 to 6
let dice_num = Math.floor(Math.random() * 6) + 1;
// console.log(dice_num);

// 3 - Add two random dice number and print the result
let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
let result = num1 + num2;
// console.log("Addition of two dice numbers: ",result);

// 4 - Write a program that reads 5 Random 2 Digit values , then find their sum and the average
function randomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
};

const randomNumbers = []
let total = 0
for (i=0;i<5;i++){
    let randomnum = randomInt(10,99);
    randomNumbers.push(randomnum);
    total += randomnum;
};
let average = total / randomNumbers.length;
// console.log("Random numbers: ",randomNumbers);
// console.log("Sum is: ",total);
// console.log("Average is: ",average);



// 5 -  Unit Conversion 

// a. 1ft = 12 in then 42 in = ? ft
let inches = 42;
let inchestofeet = 42 / 12;
// console.log(inchestofeet, "feet"); 

// b. Rectangular Plot of 60 feet x 40 feet in meters
function feettometer(a){
    return a * 0.3048;
}

const feetlength = 60;
const feetwidth = 40;
const lengthmeter = feettometer(feetlength);
const widthmeter  = feettometer(feetwidth);
// console.log(`Length and width from feet to meters: ${lengthmeter} * ${widthmeter}`);

// c. Calculate area of 25 such plots in acres
function areainAcres(length,width,plots){
    let squarefeet = length * width;
    let totalSquarefeet = squarefeet * plots;
    let totalAreaAcres = totalSquarefeet/43560;
    return totalAreaAcres;
}

const plots = 25;
const lengthFeet = 60;
const widthFeet = 40;
const totalarea = areainAcres(lengthFeet,widthFeet,plots);
// console.log(`Total area in acres is: ${totalarea}`);



          // ----- Selection Practice Problems with if and else ----//

// 1- Write a program that reads 5 Random 3 Digit values and then outputs the minimum 
// and the maximum value
function randomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
};
const randomlist = []
for(i=0;i<5;i++){
    let randomnum = randomInt(100,999);
    randomlist.push(randomnum);
}
let max_ele = randomlist[0];
let min_ele = randomlist[0];
for (let i of randomlist){
    if (i > max_ele){
        max_ele = i;
    }else if (i<min_ele){
        min_ele = i;
    }
};
// console.log('Random numbers: ',randomlist);
// console.log('Largest element: ',max_ele);
// console.log('Smallest element: ',min_ele);


// 2 - Write a program that takes day and month from the command line and prints true if 
// day of month is between March 20 and June 20, false otherwise.
const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

const startRange = {month:3,day:20};
const endrange = {month:6,day:20};

function inRange(day,month,startRange,endrange){
    if(
        (month > startRange.month && month < endrange.month) ||
        (month === startRange.month && day >= startRange.day) ||
        (month === endrange.month && day <= endrange.day)
    ){
        return true;
    }
    return false;
}

const ifRange = inRange(day,month,startRange,endrange);
// console.log(ifRange);


// 3 - Write a program that takes a year as input and outputs the Year is a Leap Year or not 
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless 
// divisible by 400
function leapYear(year){
    if (year % 4 === 0 ){
        if (year % 100 ===0){
            if (year % 400 ===0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
};
let year = 2022;
// console.log(leapYear(year));


// 4 - Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
function coinflip(){
    const num = Math.random();

    if (num>0.5){
        return "Heads";
    }else{
        return 'Tails';
    }
};
const res = coinflip();
// console.log(res);


       // ----- Selection Practice Problems with if else if and else ----//


// 1 - Read a single digit number and write the number in word

function numToWord(num){
    if (num === 0){
        return "Zero"
    }
    else if (num == 1){
        return "One"
    }
    else if (num == 2){
        return "Two"
    }
    else if (num == 3){
        return "Three"
    }
    else if (num == 4){
        return "Four"
    }
    else if (num == 5){
        return "Five"
    }
    else if (num == 6){
        return "Six"
    }
    else if (num == 7){
        return "Seven"
    }
    else if (num == 8){
        return "Eight"
    }
    else if (num == 9){
        return "Nine"
    }else{
        return "Invalid number"
    }
};
let num = 5;
// console.log(numToWord(num));


// 2 - Read a Number and Display the week day (Sunday, Monday,…)
function numtoDay(n){
    if (num === 1){
        return 'Sunday';
    }
    else if (num === 2){
        return "Monday";
    }
    else if (num === 3){
        return "Tuesday";
    }
    else if (num === 4){
        return "Wednesday";
    }
    else if (num === 5){
        return "Thursday";
    }
    else if (num === 6){
        return "Friday";
    }
    else if (num === 7){
        return "Saturday";
    }
};
let n = 4;
// console.log(numtoDay(n));


// 3 - Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
function displayValue(val){
    const numString = val.toString();
    const length = numString.length;
    for (i=0;i<length;i++){
        const digit = parseInt(numString.charAt(length-i-1));
        let placeValue;
        if (i === 0) {
            placeValue = "unit";
        } else if (i === 1) {
            placeValue = "ten";
        } else if (i === 2) {
            placeValue = "hundred";
        } else if (i === 3) {
            placeValue = "thousand";
        } else if (i === 4) {
            placeValue = "ten thousand";
        } else if (i === 5) {
            placeValue = "hundred thousand";
        } else if (i === 6) {
            placeValue = "million";
        } else if (i === 7) {
            placeValue = "ten million";
        } else if (i === 8) {
            placeValue = "hundred million";
        }
        // console.log(`Digit at ${placeValue} place: ${digit}`);
    }
}
// let val = 425;
// displayValue(val);


// 4 - Enter 3 Numbers do following arithmetic operation and find the one that 
// is maximum and minimum
// 1. a + b * c  3. c + a / b
// 2. a % b + c  4. a * b + c
function findMinMax(a, b, c) {
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;

// max result
    let maxResult = result1;
    if (result2 > maxResult) {
        maxResult = result2;
    }
    if (result3 > maxResult) {
        maxResult = result3;
    }
    if (result4 > maxResult) {
        maxResult = result4;
    }
// min result
    let minResult = result1;
    if (result2 < minResult) {
        minResult = result2;
    }
    if (result3 < minResult) {
        minResult = result3;
    }
    if (result4 < minResult) {
        minResult = result4;
    }

    return { maxResult, minResult };
}

let a = 5;
let b = 32;
let c = 7;

// console.log(findMinMax(a,b,c));



           // ----- Selection Practice Problems with case statements ----- //


// 1. Read a single digit number and write the number in word using Case
let q = 6; 
let word;
switch (q) {
    case 0:
        word = "Zero";
        break;
    case 1:
        word = "One";
        break;
    case 2:
        word = "Two";
        break;
    case 3:
        word = "Three";
        break;
    case 4:
        word = "Four";
        break;
    case 5:
        word = "Five";
        break;
    case 6:
        word = "Six";
        break;
    case 7:
        word = "Seven";
        break;
    case 8:
        word = "Eight";
        break;
    case 9:
        word = "Nine";
        break;
    default:
        word = "Invalid input";
}
// console.log(`Number ${q} in word: ${word}`);


// 2. Read a Number and Display the week day (Sunday, Monday,…)
function numtoDay(n){
    switch (n){
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
    }
};
let dnum = 4;
// console.log(numtoDay(dnum));


// 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
function displayValue(val){
    if (val <= 0) {
        console.log("Invalid number");
        return;
    }

    let place;
    const numLength = Math.floor(Math.log10(val)) + 1;
        switch (numLength) {
            case 1:
                place = "unit";
                break;
            case 2:
                place = "ten";
                break;
            case 3:
                place = "hundred";
                break;
            case 4:
                place = "thousand";
                break;
            case 5:
                place = "ten thousand";
                break;
            case 6:
                place = "hundred thousand";
                break;
            case 7:
                place = "million";
                break;
            case 8:
                place = "ten million";
                break;
            case 9:
                place = "hundred million";
                break;
            default:
                place = "Invalid number";
        }
        // console.log(`The number ${val} corresponds to ${place}.`);
    };
let s = 8799;
displayValue(s);


// 4. Write a program that takes User Inputs and does Unit Conversion of 
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

// function feetToInch(feet) {
//     return feet * 12;
// }
// function inchToFeet(inch) {
//     return inch / 12;
// }
// function feetToMeter(feet) {
//     return feet * 0.3048;
// }
// function meterToFeet(meter) {
//     return meter / 0.3048;
// }
// function convert(choice, value) {
//     switch(choice) {
//         case 1:
//             console.log(`${value} feet equal ${feetToInch(value)} inch`);
//             break;
//         case 2:
//             console.log(`${value} feet is equal to ${feetToMeter(value).toFixed(2)} meter`);
//             break;
//         case 3:
//             console.log(`${value} inch equal ${inchToFeet(value).toFixed(2)} feet`);
//             break;
//         case 4:
//             console.log(`${value} meter equal ${meterToFeet(value).toFixed(2)} feet.`);
//             break;
//         default:
//             console.log("Invalid choice.");
//     }
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question(`Enter your choice:
// 1. Feet to Inch
// 2. Feet to Meter
// 3. Inch to Feet
// 4. Meter to Feet
// `, (choice) => {
//     readline.question(`Enter the value: `, (value) => {
//         convert(parseInt(choice), parseFloat(value));
//         readline.close();
//     });
// });


// ------ Repetition Practice Problems with for loop ----- //

// 1. Write a program that takes a command-line argument n and prints a table of the 
// powers of 2 that are less than or equal to 2^n.
// const n1 = parseInt(process.argv[2]);
// // Print the table of powers of 2
// console.log("2^0 = 1");
// let powerOfTwo = 1;
// for (let i = 1; i <= n1; i++) {
//     powerOfTwo *= 2;
//     if (powerOfTwo > Math.pow(2, n1)) {
//         break;
//     }
//     console.log(`2^${i} = ${powerOfTwo}`);
// }


// Write a program that takes a command-line argument n and prints the nth harmonic 
// number. Harmonic Number is of the form
// Parse the command line argument
// const n2 = parseInt(process.argv[2]);
// // Check if n is a valid number
// if (isNaN(n2) || n2<= 0) {
//     console.log("Please provide a valid positive integer for n.");
//     process.exit(1);
// }
// // Calculate the nth harmonic number
// let harmonic = 0;
// for (let i = 1; i <= n2; i++) {
//     harmonic += 1 / i;
// }
// console.log(`The ${n2}th harmonic number is: ${harmonic.toFixed(4)}`);


// 5- 3. Write a program that takes a input and determines if the number is a prime.
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a number: ', (number) => {
//     const num = parseInt(number);
//     if (isNaN(num)) {
//         console.log("Please enter a valid number.");
//     } else {
//         if (isPrime(num)) {
//             console.log(`${num} is a prime number.`);
//         } else {
//             console.log(`${num} is not a prime number.`);
//         }
//     }
//     readline.close();
// });



// Extend the program to take a range of number as input and output the Prime 
// Numbers in that range

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function primeNumbersInRange(start, end) {
//     const primeNumbers = [];
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             primeNumbers.push(i);
//         }
//     }
//     return primeNumbers;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter start range: ', (start) => {
//     readline.question('Enter end range: ', (end) => {
//         const startNum = parseInt(start);
//         const endNum = parseInt(end);
//         if (isNaN(startNum) || isNaN(endNum) || startNum < 0 || endNum < 0 || startNum > endNum) {
//             console.log("Please enter valid non-negative integers for the range.");
//         } else {
//             const primes = primeNumbersInRange(startNum, endNum);
//             if (primes.length === 0) {
//                 console.log(`No prime numbers in range ${startNum} to ${endNum}.`);
//             } else {
//                 console.log(`Prime numbers in range ${startNum} to ${endNum}: ${primes.join(', ')}`);
//             }
//         }
//         readline.close();
//     });
// });



// 5 - Write a program that computes a factorial of a number taken as input. 
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question('Enter a number to find factorial: ', (number) => {
//     const num = parseInt(number);
//     if (isNaN(num) || num < 0) {
//         console.log("Please enter a non-negative integer.");
//     } else {
//         const result = factorial(num);
//         console.log(`${num} factorial is: ${result}`);
//     }
//     readline.close();
// });


// 6. Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.
// function primeFactors(n) {
//     const factors = [];
//     // Print the number of 2s that divide n
//     while (n % 2 === 0) {
//         factors.push(2);
//         n = Math.floor(n / 2);
//     }
//     // n must be odd at this point, so iterate for odd numbers
//     for (let i = 3; i * i <= n; i += 2) {
//         // While i divides n, add i to factors and divide n
//         while (n % i === 0) {
//             factors.push(i);
//             n = Math.floor(n / i);
//         }
//     }
//     // If n is a prime greater than 2
//     if (n > 2) {
//         factors.push(n);
//     }
//     return factors;
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter number to find prime factors: ', (number) => {
//     const num = parseInt(number);
//     if (isNaN(num) || num <= 1) {
//         console.log("Please enter valid number");
//     } else {
//         const factors = primeFactors(num);
//         console.log(`Prime factors of ${num}: ${factors.join(', ')}`);
//     }
//     readline.close();
// });




               // -------  Repetition Practice Problems with while loop ------ //

// 1. Write a program that takes a command-line argument n and prints a 
// table of the powers of 2 that are less than or equal to 2^n till 256 is 
// reached.
// Check if the command line argument is provided
// const n3 = parseInt(process.argv[2]);

// // Check if n is a valid number
// if (isNaN(n3) || n3 < 0) {
//     console.log("Please provide a valid non-negative number.");
//     process.exit(1);
// }
// console.log(`Powers of 2 less than or equal to 2^${n3}:`);
// let powerOfTwo = 1;
// let exponent = 0;
// while (powerOfTwo <= 256 && exponent <= n) {
//     console.log(`2^${exponent} = ${powerOfTwo}`);
//     powerOfTwo *= 2;
//     exponent++;
// }



// 2 - Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached.
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// function findMagicNumber() {
//     let low = 1;
//     let high = 100;
//     let magicNumber = -1;
//     console.log("Think number between 1 and 100.");
//     // Loop until the magic number is found
//     while (magicNumber === -1) {
//         let guess = Math.floor((low + high) / 2);

//         readline.question(`Is your number less than ${guess}? (yes/no): `, (answer) => {
//             if (answer.toLowerCase() === 'yes') {
//                 high = guess - 1;
//             } else if (answer.toLowerCase() === 'no') {
//                 low = guess + 1;
//             } else {
//                 console.log("Answer 'yes' or 'no'.");
//                 findMagicNumber(); 
//                 return;
//             }
//             // Check if the guess is the magic number
//             if (low === high) {
//                 magicNumber = low;
//                 console.log(`magic number is ${magicNumber}.`);
//                 readline.close();
//             } else {
//                 findMagicNumber(); 
//             }
//         });
//     }
// }
// findMagicNumber();



// 3. Extend the Flip Coin problem till either Heads or Tails wins 11 times. 
// function flipCoin() {
//     return Math.random() < 0.5 ? 'Heads' : 'Tails';
// }

// function playGame() {
//     let headsCount = 0;
//     let tailsCount = 0;

//     while (headsCount < 11 && tailsCount < 11) {
//         const result = flipCoin();
//         if (result === 'Heads') {
//             headsCount++;
//         } else {
//             tailsCount++;
//         }
//         console.log(`Result of flip: ${result}`);
//     }

//     if (headsCount === 11) {
//         console.log("Heads wins!");
//     } else {
//         console.log("Tails wins!");
//     }
// }
// playGame();



// 4- Write a Program where a gambler starts with Rs 100 and places Re 1 bet 
// until he/she goes broke i.e. no more money to gamble or reaches the 
// goal of Rs 200. Keeps track of number of times won and number of bets made.
// function gamble() {
//     let money = 100;
//     const goal = 200;
//     let bets = 0;
//     let wins = 0;

//     while (money > 0 && money < goal) {
//         bets++;
//         if (Math.random() < 0.5) {
//             money++; // Win
//             wins++;
//         } else {
//             money--; // Lose
//         }
//     }
//     if (money === 0) {
//         console.log("you're broke");
//     } else {
//         console.log("you've reached Rs 200!");
//     }
//     console.log(`Total bets: ${bets}`);
//     console.log(`Total wins: ${wins}`);
// }
// gamble();




                    // ---- Fuction Practice Problems --- //


// 1. Help user find degF or degC based on their Conversion Selection. Use 
// Case Statement and ensure that the inputs are within the Freezing Point ( 
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function convertToFahrenheit(degC) {
//     return (degC * 9 / 5) + 32;
// }

// function convertToCelsius(degF) {
//     return (degF - 32) * 5 / 9;
// }

// readline.question(`Select:
// a. Celsius to Fahrenheit
// b. Fahrenheit to Celsius
// Enter your choice (a/b): `, (choice) => {
//     switch (choice.toLowerCase()) {
//         case 'a':
//             readline.question('Enter temperature in Celsius: ', (temp) => {
//                 const degC = parseFloat(temp);
//                 if (isNaN(degC) || degC < 0 || degC > 100) {
//                     console.log("enter valid temperature in range of 0°C to 100°C.");
//                 } else {
//                     const degF = convertToFahrenheit(degC);
//                     console.log(`${degC}°C equal to ${degF.toFixed(2)}°F.`);
//                 }
//                 readline.close();
//             });
//             break;
//         case 'b':
//             readline.question('Enter temperature in Fahrenheit: ', (temp) => {
//                 const degF = parseFloat(temp);
//                 if (isNaN(degF) || degF < 32 || degF > 212) {
//                     console.log("enter valid temperature in range of 32°F to 212°F.");
//                 } else {
//                     const degC = convertToCelsius(degF);
//                     console.log(`${degF}°F equal to ${degC.toFixed(2)}°C.`);
//                 }
//                 readline.close();
//             });
//             break;
//         default:
//             console.log("Invalid choice.select 'a' or 'b'.");
//             readline.close();
//     }
// });



// 2. Write a function to check if the two numbers are Palindromes

// function Palindromes() {
//     const num1 = 12321; 
//     const num2 = 12345; 

//     function isPalindrome(num) {
//         const numStr = num.toString();
//         const reversedStr = numStr.split('').reverse().join('');
//         return numStr === reversedStr;
//     }
//     const result1 = isPalindrome(num1);
//     const result2 = isPalindrome(num2);

//     console.log(`${num1} is ${result1 ? 'a' : 'not a'} palindrome.`);
//     console.log(`${num2} is ${result2 ? 'a' : 'not a'} palindrome.`);
// }
// Palindromes();



// 3 - Take a number from user and check if the number is a Prime then show 
// that its palindrome is also prime
// a. Write function check if number is Prime 
// b. Write function to get the Palindrome. 
// c. Check if the Palindrome number is also prime

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function checkPalindromePrime(num) {
    if (isPrime(num)) {
        const palindrome = getPalindrome(num);
        if (isPrime(palindrome)) {
            console.log(`${num} is prime number and its palindrome ${palindrome} is also prime.`);
        } else {
            console.log(`${num} is prime number but its palindrome ${palindrome} is not prime.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

readline.question('Enter a number: ', (input) => {
    const num = parseInt(input);
    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid positive integer.");
    } else {
        checkPalindromePrime(num);
    }
    readline.close();
});
