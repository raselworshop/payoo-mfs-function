document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('input-add-money');
    const pinNumber= getInputFieldById('input-pin-number')
    // console.log('add money inside addMoney.js2',addMoney, pinNumber)
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance')
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

                // to add transactions history 
                const p = document.createElement('p');
                p.innerText = `added: ${addMoney} Tk. new balance: ${newBalance}`;
            // should be a common function
            document.getElementById('transactions-details').appendChild(p)
        console.log(balance, addMoney, p)
    }else{
        alert('Failed to add money')
    }
})