// console.log('cash out file added')
document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldById('input-cashout-money');
    const pinNumber= getInputFieldById('input-cashout-pin-number')
    // console.log('add prevent function', cashOut, pinNumber)
    if(isNaN(cashOut)){
        alert('Failed to cash out');
        return
    }
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        if(cashOut > balance){
            alert("You don't have enough money to withdraw");
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // to add cash out transaction history 
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
                        <h4 class="text-2xl font-semibold">Cash Out</h4>
                        <p>${cashOut} withdraw. new balance: ${newBalance}</p> 
        `
        document.getElementById('transactions-details').appendChild(div);
        // console.log('balance here', newBalance)
    }else{
        alert('Failed to cash out, please try again')
    }
})