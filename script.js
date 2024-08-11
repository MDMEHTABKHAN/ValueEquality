document.getElementById('dowryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateDowry();
});

function calculateDowry() {
    const salary = parseFloat(document.getElementById('salary').value);
    const age = parseInt(document.getElementById('age').value);
    const netWorth = parseFloat(document.getElementById('netWorth').value);

    if (!isNaN(salary) && !isNaN(age) && !isNaN(netWorth)) {
        const minAmount = (salary * 12 * age) / 1000;
        const maxAmount = (salary * 12 * age + netWorth) / 1000;

        document.getElementById('minAmount').innerText = minAmount.toFixed(2) + " ₹";
        document.getElementById('maxAmount').innerText = maxAmount.toFixed(2) + " ₹";
    } else {
        alert("Please enter valid numbers");
    }
}
