const start = 1;
const end = 10;

for (let number = start; number <= end; number++) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
