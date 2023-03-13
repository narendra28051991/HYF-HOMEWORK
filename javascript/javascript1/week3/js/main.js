// Calculate the sum of all the squares

let arrayOfNumbers = []

function sumOfNumbers() {
    for (let index = 0; index < 6; index++) {
        let number = +prompt(`Enter number ${index + 1}: `);
        arrayOfNumbers.push(number);
    }

    function sumOfEven() {
        let sum = 0;
        for (let index = 0; index < arrayOfNumbers.length; index++) {
            if (arrayOfNumbers[index] % 2 === 0) {
                sum += arrayOfNumbers[index];
            } else {
                sum += 0;
            }
        }
        return sum;
    }

    const sumOfEvenNumbers = sumOfEven();
    return sumOfEvenNumbers;
}

const output = sumOfNumbers();
console.log(`Output: ${output}`);