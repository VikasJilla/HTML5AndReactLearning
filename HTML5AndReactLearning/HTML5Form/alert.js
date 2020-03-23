//learning js from javascript.info

//loading external js example
// alert("I'm from external Javascript")

//using variables
// let admin,name;
// name = 'john';
// //copying variables
// admin = name;
// alert(admin);

// let varNumb = '2';
// varNumb = `hi ${varNumb}`;//not single quotes they are back tricks.
// alert(typeof alert);

//naming variables
// let ourPlanetName = 'Earth';
// let currentVisitorName;

// use upper case for only hard-coded constants and lower case for dynamically computed constants
// const DATE_OF_BIRTH = '18-09-2020';
// const age = calculateAge(DATE_OF_BIRTH);

//using break
// while(true){
//     let numberEntered = prompt('Enter a number greater than 100',0);
//     if(numberEntered > 100)break;
// }


//printing prime numbers between 2 to n
// let number = prompt('enter any number greater than 2','');
// let i = 3;

// while( i <= number ){
//     let divisor = 2;
//     let isPrime = true;
//     for(; divisor <= i ** (1/2) && isPrime; divisor++){
//         if(i % divisor == 0)isPrime = false;
//     }
//     if(isPrime)console.log(i + ' is prime\n');
//     i++;
// }




function showAnAlert(val = pow(2,3)){
    alert('showing ashu is sony ' + val);
}

let aler = showAnAlert;
aler();

function pow(a,b){
    return a**b;
}

function min(a,b){
    return a < b ? a : b;
}