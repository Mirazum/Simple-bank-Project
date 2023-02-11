// 1.add event handeler with the withdraw button
// 2.get the withdraw amount from the withdraw input field
//3 get previous total
//4 calculate total withdraw amount
//5get the previous balance total
// 6 calculate new balance total

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // 2
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawstring = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawstring);

     //step-7 clear the input field
     withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return
    }
    // 3
    const previouswithdraw = document.getElementById('withdraw-total')
    const previousTotalstring = previouswithdraw.innerText;
    const previousTotal = parseFloat(previousTotalstring);
   
    // 5
    const balanceTotalelement = document.getElementById('balance-total');
    const previousbalanceTotalstring = balanceTotalelement.innerText;
    const previousBalanceTotal = parseFloat(previousbalanceTotalstring);
     

    // warning
    if (newWithdrawAmount>previousBalanceTotal){
        alert('Bap er bank e eto taka nei :)');
        return;
    }
     // 4
     const currentWithdrawTotal = previousTotal + newWithdrawAmount;
     previouswithdraw.innerText = currentWithdrawTotal;

    // 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalelement.innerText=newBalanceTotal;



  

})