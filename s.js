const cpInput= document.querySelector("#cp_input");
const stocks= document.querySelector("#stocks");
const curpriceInput= document.querySelector("#curprice_input");
const tellmeBtn= document.querySelector("#tellme-btn");
const output = document.querySelector("#output");


tellmeBtn.addEventListener("click" , function checkProfitLoss(){
    var totalcp = parseInt(cpInput.value) * parseInt(stocks.value);
    var totalsp = parseInt(curpriceInput.value) * parseInt(stocks.value);
    output.style.display = "block";
    
    if(totalsp - totalcp > 0){
        var profit = totalsp - totalcp;
        // console.log("profit " + profit);
        var profiPercentage = profit/totalcp*100;
        // console.log(profiPercentage);
        
        
        output.style.color = "green";
        output.innerHTML = `Your Profit is ${profit.toFixed(2)} and profit percentage is ${profiPercentage.toFixed(2)} %`
        
    }

    else if(totalsp - totalcp <0){
        var loss = totalcp - totalsp;
        var lossPercentage = loss/totalcp*100;
        output.style.color = "red";
        output.innerHTML = `Your Loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)} %`
        
    }
    else{
        output.style.color = "white";
        output.innerText = "No Pain No Gain"

    }
})


