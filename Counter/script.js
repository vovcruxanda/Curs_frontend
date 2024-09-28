let inputEl = document.getElementById('input');
let decrementBtn = document.querySelector('#decrement');
let resetBtn = document.querySelector('#reset');
let incrementBtn = document.querySelector('#increment');

let counter = 0;

// Function to update the displayed counter
const updateCounterDisplay = () => {
    inputEl.textContent = counter;
    console.log(counter);
};

// Reset the counter to 0
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounterDisplay();
});

// Decrement the counter
decrementBtn.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

// Increment the counter
incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

// Keyboard functionality for arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        counter++;
        updateCounterDisplay();
    } else if (event.key === 'ArrowDown') {
        counter--;
        updateCounterDisplay();
    }
});
