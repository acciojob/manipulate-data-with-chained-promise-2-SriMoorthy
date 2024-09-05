//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numbers = [1, 2, 3, 4];
            resolve(filterEvenNumbers(numbers));
        }, 3000); // Resolve after 3 seconds
    });
}

// Function to filter out odd numbers (Promise-based)
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById('output').textContent = `Even Numbers: ${evenNumbers.join(',')}`
            resolve(multiplyByTwo(evenNumbers));
        }, 1000); // Wait for 1 second before resolving
    });
}

// Function to multiply the even numbers by 2 (Promise-based)
function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            document.getElementById('output').textContent = `Multiplied Numbers: ${multipliedNumbers.join(',')}`
            resolve(multipliedNumbers);
        }, 2000); // Wait for 2 seconds before resolving
    });
}


// Chaining Promises
getNumbers()