function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const valueFloat = parseFloat(inputValue);
    //clear the value after calculate
    inputField.value = '';
    return valueFloat;
}

function getAmount(amountId, value) {
    const amount = document.getElementById(amountId);
    const amountText = amount.innerText;
    const amountFloat = parseFloat(amountText);
    const totalAmount = amountFloat + value;
    amount.innerText = totalAmount;

}

function updateBalance(depositInputFloat, isAdd) {
    const currentBalance = document.getElementById('current-balance');
    const balanceText = currentBalance.innerText
    const balanceFloat = parseFloat(balanceText);
    if (isAdd == true) {
        const totalBalance = balanceFloat + depositInputFloat;
        currentBalance.innerText = totalBalance;
    }
    else {
        const totalBalance = balanceFloat - depositInputFloat;
        currentBalance.innerText = totalBalance;
    }
}

//deposit button add event handle 
document.getElementById('deposit-button').addEventListener('click', function () {
    //deposit input update
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputValue = depositInput.value;
    // const depositInputFloat = parseFloat(depositInputValue);
    const depositInputFloat = getInputValue('deposit-input')

    //deposit amount 
    // const depositAmount = document.getElementById('deposit-amount');
    // const depositAmountText = depositAmount.innerText;
    // const depositAmountFloat = parseFloat(depositAmountText);
    // const depositTotal = depositInputFloat + depositAmountFloat;
    // depositAmount.innerText = depositTotal

    if (depositInputFloat > 0) {
        getAmount('deposit-amount', depositInputFloat);
        updateBalance(depositInputFloat, true)
    }

    //update balance total
    // const currentBalance = document.getElementById('current-balance');
    // const balanceText = currentBalance.innerText
    // const balanceFloat = parseFloat(balanceText);
    // const totalBalance = balanceFloat + depositInputFloat;
    // currentBalance.innerText = totalBalance;


})

//withdraw button event handle

document.getElementById('withdraw-button').addEventListener('click', function () {
    //withdraw input
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawValue = withdrawInput.value;
    // const withdrawFloat = parseFloat(withdrawValue);
    const withdrawFloat = getInputValue('withdraw-input')

    //withdraw amount
    // const withdrawAmount = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withdrawAmount.innerText;
    // const withdrawAmountFloat = parseFloat(withdrawAmountText);
    // const totalWithdraw = withdrawFloat + withdrawAmountFloat;
    // withdrawAmount.innerText = totalWithdraw

    if (withdrawFloat > 0) {
        getAmount('withdraw-amount', withdrawFloat);
        updateBalance(withdrawFloat, false)
    }

    //update balance after withdraw

    // const currentBalance = document.getElementById('current-balance');
    // const currentBalanceText = currentBalance.innerText;
    // const currentBalanceFloat = parseFloat(currentBalanceText);
    // const totalCurrentBalance = currentBalanceFloat - withdrawFloat;
    // currentBalance.innerText = totalCurrentBalance;


})