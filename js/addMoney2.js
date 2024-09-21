document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('input-add-money');
    const pinNumber= getInputFieldById('input-pin-number')
    // console.log('add money inside addMoney.js2',addMoney, pinNumber)
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance')
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        console.log(balance, addMoney)
    }else{
        alert('Failed to add money')
    }
})