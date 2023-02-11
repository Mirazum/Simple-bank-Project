// step-1: add event listener to the deposit

document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside input field
    const depositField= document.getElementById('deposit-field');
    const newdepositAmountstring= depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountstring);
    console.log(typeof newdepositAmount)
    // get the deposit total
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement= document.getElementById('deposit-total')
    const previousdeposittotalstring = depositTotalElement.innerText;
    const previousdeposittotal = parseFloat(previousdeposittotalstring);
    
    const currentDepositTotal= previousdeposittotal + newdepositAmount;

    depositTotalElement.innerText= currentDepositTotal;
    // get balance total
    const balanceTotalelement= document.getElementById('balance-total');
    const previousbalanceTotalstring= balanceTotalelement.innerText;
    const previousBalanceTotal= parseFloat(previousbalanceTotalstring);
    // calculate total balance
    const currentBalanceTotal = previousBalanceTotal+newdepositAmount;
    // set the balance total
    balanceTotalelement.innerText = currentBalanceTotal;

    // clear the deposit field

    depositField.value ='';
    // 

})
// 