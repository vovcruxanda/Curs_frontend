// Get buttons and modal elements
var btn1 = document.getElementById('modal-1');
var btn2 = document.getElementById('modal-2');
var btn3 = document.getElementById('modal-3');
var modalBox = document.querySelector('#modal1-box');
var closeBtn = document.querySelector('#closeBtn1');
var title = document.querySelector('.modal-text h2');

// Function to show the modal
const showModal = (titleText) => {
    title.textContent = titleText;
    modalBox.style.display = 'flex';
};

// Button 1 functionality
btn1.addEventListener('click', () => {
    showModal("I'm the modal window 1");
});

// Button 2 functionality
btn2.addEventListener('click', () => {
    showModal("I'm the modal window 2");
});

// Button 3 functionality
btn3.addEventListener('click', () => {
    showModal("I'm the modal window 3");
});

// Close modal functionality
closeBtn.addEventListener('click', () => {
    modalBox.style.display = 'none';
});

// Close modal on background click
modalBox.addEventListener('click', (e) => {
    if (e.target === modalBox) {
        modalBox.style.display = 'none';
    }
});
