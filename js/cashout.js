// console.log('cash out file added')
document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldById('input-cashout-money');
    const pinNumber= getInputFieldById('input-cashout-pin-number')
    // console.log('add prevent function', cashOut, pinNumber)
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
        // console.log('balance here', newBalance)
    }else{
        alert('Failed to cash out, please try again')
    }
})