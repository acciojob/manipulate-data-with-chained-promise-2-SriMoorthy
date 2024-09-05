//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numbers = [1, 2, 3, 4];
            resolve(numbers);
        }, 3000); // Resolve after 3 seconds
    });
}

// Function to filter out odd numbers (Promise-based)
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000); // Wait for 1 second before resolving
    });
}

// Function to multiply the even numbers by 2 (Promise-based)
function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            resolve(multipliedNumbers);
        }, 2000); // Wait for 2 seconds before resolving
    });
}

// Function to update the output div with the content
function updateOutput(content) {
    document.getElementById('output').textContent = content;
}

// Chaining Promises
getNumbers()
    .then(numbers => {
        // Filter even numbers and update output
        return filterEvenNumbers(numbers).then(evenNumbers => {
            updateOutput(`Even numbers: ${evenNumbers.join(',')}`);
            return evenNumbers;
        });
    })
    .then(evenNumbers => {
        // Multiply by two and update output
        return multiplyByTwo(evenNumbers).then(multipliedNumbers => {
            updateOutput(`Multiplied numbers: ${multipliedNumbers.join(',')}`);
        });
    })
    .catch(err => {
        console.error('Error:', err);
    });