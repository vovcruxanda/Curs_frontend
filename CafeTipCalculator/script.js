const billAmountInput = document.getElementById('bill-amount'); 
const splitCountInput = document.getElementById('split-count');
const tipTotalDisplay = document.getElementById('tip-total');
const tipPersonDisplay = document.getElementById('tip-person');
const totalPersonDisplay = document.getElementById('total-person');
const ctx = document.getElementById('tipChart').getContext('2d');

document.getElementById('compute-btn').addEventListener('click', computeTip);
document.getElementById('reset-btn').addEventListener('click', resetCalculator);

const tipRadioButtons = document.querySelectorAll('input[name="tip-option"]');
tipRadioButtons.forEach((radio) => {
    radio.addEventListener('change', updateTipDisplay);
});

let tipChart; // Initialize variable to hold the chart instance

function computeTip() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(getCheckedTipPercentage());
    const peopleCount = parseInt(splitCountInput.value);

    if (!isValidBill(billAmount)) return;

    const totalTip = billAmount * tipPercentage;
    const totalPerPerson = (billAmount + totalTip) / peopleCount;
    const tipPerPerson = totalTip / peopleCount;

    updateDisplay(tipPerPerson, totalPerPerson);
    updateChart(totalTip, billAmount + totalTip); // Update chart with new data
}

function updateTipDisplay() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(getCheckedTipPercentage());

    if (isValidBill(billAmount)) {
        const totalTip = billAmount * tipPercentage;
        tipTotalDisplay.textContent = totalTip.toFixed(2);
    }
}

function resetCalculator() {
    billAmountInput.value = '';
    tipRadioButtons.forEach((radio) => (radio.checked = false));
    splitCountInput.value = '0';
    updateDisplay(0, 0);
    resetChart(); // Reset the chart on reset
}

function getCheckedTipPercentage() {
    return document.querySelector('input[name="tip-option"]:checked')?.value || 0;
}

function isValidBill(billAmount) {
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return false;
    }
    return true;
}

function updateDisplay(tipPerPerson, totalPerPerson) {
    tipPersonDisplay.textContent = tipPerPerson.toFixed(2) + " MDL";
    totalPersonDisplay.textContent = totalPerPerson.toFixed(2) + " MDL";
}

function updateChart(totalTip, totalAmount) {
    if (tipChart) {
        // Update existing chart data
        tipChart.data.datasets[0].data = [totalTip, totalAmount];
        tipChart.update();
    } else {
        // Create a new chart
        tipChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Tip Amount', 'Total Amount'],
                datasets: [{
                    label: 'Amount (MDL)',
                    data: [totalTip, totalAmount],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function resetChart() {
    if (tipChart) {
        tipChart.destroy(); // Destroy existing chart
        tipChart = null; // Reset chart variable
    }
    // Clear canvas for next chart
    const canvas = document.getElementById('tipChart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
