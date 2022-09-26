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
    if(isInputValid())
    {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML=
        `If you deposit ${setFontColorToYellow(principal)} at an interest rate of `
        +`${setFontColorToYellow(rate)} You will receive an amount of `
        +`${setFontColorToYellow(interest)} in the year `
        +`${setFontColorToYellow(year)}`;
    }
}

function setFontColorToYellow(element)
{
    return `<span style="color:#FFC300">${element}</span>\<br\>`
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}

function isInputValid()
{
    var isValid = false;
    var principal = document.getElementById("principal");
    if(principal.value <= 0)
    {
        confirm("Enter a positive number");
        principal.focus();
    }
    else
    {
        isValid = true;
    }
    return isValid;
}