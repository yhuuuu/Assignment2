function calculateTip(tipPercentage) {

    //Get the bill amount and conver "billAmount"from a string to a number
    const billAmount = parseFloat(document.getElementById('billAmount').value)

    //Check if the bill amount is a vaild number
    if (isNaN(billAmount)) {
        alert('Please enter a valid number for the bill amount.')
        return;
    }

    let calculatedTipAmount

    if (tipPercentage === 'custom') {
        //Get the custom tip percentage 
        const customTipPercentage = parseFloat(document.getElementById('customTipPercentage').value)
        //Check if the bill amount is vaild number or less than 0
        if (isNaN(customTipPercentage) || customTipPercentage < 0) {
            alert('Please enter a valid or non-negative number for the custom tip percentage.')

            document.getElementById('customTipPercentage').value = ''
            return;


        }
        //Calculate the tip amount based on the custom tip perecentage
        calculatedTipAmount = (billAmount * customTipPercentage) / 100
    }
    else {
        // Calculate the tip amount based on the provided tip percentage 
        calculatedTipAmount = (billAmount * tipPercentage) / 100

    }
    // Calculate total amount 
    const totalAmount = billAmount + calculatedTipAmount

    console.log("Total Tips: ", calculatedTipAmount)
    console.log("Total Amount: ", totalAmount)

    document.getElementById('calculatedTipAmount').innerText = `$${calculatedTipAmount.toFixed(2)}`;

    document.getElementById('totalAmount').innerText = `$${totalAmount.toFixed(2)}`;



}

function clearValues() {
    document.getElementById('calculatedTipAmount').innerText = `$0.00`;

    document.getElementById('totalAmount').innerText = `$0.00`;
    document.getElementById('customTipPercentage').value = '';
    document.getElementById('billAmount').value = '';



}