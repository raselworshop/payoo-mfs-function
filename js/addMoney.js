document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // const addMoney = document.getElementById('input-add-maney').value;
    // const addMoneyNumber= parseFloat(addMoney)
    // document.getElementById('input-add-money')
    console.log('clicked the adding money button')
    // const addMoney = getInputFieldValueById();
    // console.log('return the value: ', addMoney)

    const addMoney = getInputFieldValueById('input-add-money');
    const inputPin = getInputFieldValueById('input-pin-number')
    console.log('add money with perameter', addMoney, inputPin)
});