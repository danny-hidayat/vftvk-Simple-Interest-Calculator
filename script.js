 function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = parseFloat(principal) * parseFloat(years) * parseFloat(rate) /100;
    //var amount = interest + parseFloat(principal)
    var year = new Date().getFullYear()+parseInt(years);
    //p = document.getElementById("principal").value;
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}