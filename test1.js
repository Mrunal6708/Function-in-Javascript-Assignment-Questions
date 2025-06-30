//.By using arrow function
const squre = num => num * num;

console.log(squre(10));
console.log(squre(15));

//Use this function to greet three different people.

function generateGreeting(name){
    return `Hello `+name+ " what are you doing?"; 
} 
const greeting1=generateGreeting("Vaidehi");
const greeting2=generateGreeting("Vaibhavi");
const greeting3=generateGreeting("Sohel");

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);

//IIFE (Immediately Invoked Function Expression to calculate and display square of a number.
(function(num1){
    const squre = num1 * num1;
    console.log(squre);
}(55)
)

// calculateTax
function calculateTax(){
    return function(income){
        let taxRate;

        if (income <= 250000){
            taxRate =0;
        }   else if (income <= 500000){
            taxRate =0.05;
        } else if (income <= 1000000){
            taxRate =0.2;
        }else {
            taxRate =0.3;
        }
        const tax = income* taxRate;
        return tax;
    } ;
}
const taxcalculator=calculateTax();

const income1= 200000;
const income2= 290000;
const income3= 320000;
const income4= 3400000;

console.log(`Income: ${income1}, Tax: ${taxcalculator(income1)}`);
console.log(`Income: ${income2}, Tax: ${taxcalculator(income2)}`);
console.log(`Income: ${income3}, Tax: ${taxcalculator(income3)}`);
console.log(`Income: ${income4}, Tax: ${taxcalculator(income4)}`);

//factorial that calculates
function factorial (n){
    if (n < 0){
        return "Invalid output "
    }
    if (n == 0 || n == 1){
        return 1;
    }
    return n * factorial (n - 1)
}

console.log(factorial(-3));
console.log(factorial(0));
console.log(factorial(12));
console.log(factorial(4));


// function with all arguments that adds two numbers.

function addnum(x,y){ //Thir x and y are parameters
    return z=x +y;
}

console.log(addnum(3,4));// 3 & 4 are are parameters.
console.log(addnum(15,5));// 15 & 5 are are parameters.
console.log(addnum(2,2));// 2 & 2 are are parameters.
console.log(addnum(10,30));// 10 & 30 are are parameters.