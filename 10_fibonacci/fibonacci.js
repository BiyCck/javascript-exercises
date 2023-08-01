const fibonacci = function(number) {
    if(number < 1){
        return "OOPS";
    }
    number = Number.parseInt(number)
    if(number === 1 || number === 2){
        return 1
    } else{
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
