console.log('features file added')

document.getElementById('show-add-money-form').addEventListener('click', function(){
    console.log('function added')
    showSectionById('add-money-form')
})

document.getElementById('show-cashout-form')
    .addEventListener('click', function(){
        showSectionById('cashout-form')
    })

document.getElementById('show-transaction-history')
    .addEventListener('click', function(){
        showSectionById('transaction-history')
    })