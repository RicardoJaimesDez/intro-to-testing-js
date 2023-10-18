// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === false) {
        return "Hello, World!";
    }
    if (input === true) {
        return "Hello, World!";
    }
    if (input === "Hello, World") {
        return `Hello, World!`;
    } else {
        return "Hello, " + input + "!";
    }
}