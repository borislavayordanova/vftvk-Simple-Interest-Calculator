function fillValues()
{
    var select = document.getElementById("years");
    for(var i = 1; i <= 20; i++) {
        select.options[select.options.length] = new Option(`${i}`, `${i}`);
    };

    var defaultRate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${defaultRate}%`;
}

function compute()
{
    var principal = document.getElementById("principal").value; 
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateInput()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0)
    {        
        window.alert("Enter a positive number");
    }
}