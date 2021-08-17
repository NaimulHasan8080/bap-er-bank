document.getElementById('deposit-button').addEventListener('click', function () {
    //deposit and deposit input value
    const depositInputText = document.getElementById('deposit-input');
    const depositAmount = depositInputText.value
    const totalDeposit = document.getElementById('deposit-amount');
    const totalDepositText = totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositText) + parseFloat(depositAmount)
    totalDeposit.innerText = totalDepositAmount;

    //update balance total
    const balanceText = document.getElementById('current-balance')
    const previousBalanceAmount = balanceText.innerText;
    const newBalanceAmount = parseFloat(previousBalanceAmount);
    const currentBalance = newBalanceAmount + parseFloat(depositAmount);
    balanceText.innerText = currentBalance



    //clear the value after calculate
    depositInputText.value = '';
})

//withdraw button event handle

document.getElementById('withdraw-button').addEventListener('click', function () {
    //calculate total withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawTotalText = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawTotalText.innerText;
    const totalWithdrawAmount = parseFloat(withdrawValue) + parseFloat(withdrawAmountText);//use parseFloat for convert string to number
    withdrawTotalText.innerText = totalWithdrawAmount;

    //update balance after withdraw

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const totalCurrentBalance = parseFloat(currentBalanceText) - parseFloat(withdrawValue);
    currentBalance.innerText = totalCurrentBalance


    // clear withdraw field
    withdrawInput.value = '';

})