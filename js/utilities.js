/**
 * shared files/functions
 */

// function getInputFieldValueById(){
//     const addMoney = document.getElementById('input-add-money').value;
//     const addMoneyNumber= parseFloat(addMoney);
//     return addMoneyNumber;
//     // return addMoney
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}