function updateSlider(slideAmount)
{
var sliderDiv = document.getElementById("result");
sliderDiv.innerHTML = slideAmount;
}

function compute(){
event.preventDefault();   
  var principal = parseFloat(document.getElementById("principal").value);

if(principal<=0 || principal<=0)
	{
        alert("enter a positive number in amount");
        document.getElementById("principal").focus();
        }
else
{
  var d = new Date();
  var interestRate1 = parseFloat(document.getElementById("rate").value);
  interestRate = interestRate1 / 100;
  var termOfLoan = parseFloat(document.getElementById("years").value);
  var simpleInt = principal * interestRate * termOfLoan;
  var amount = principal + simpleInt;
  var years = d.getFullYear() + termOfLoan;
  document.getElementById("s1").innerHTML = "If you deposit <mark>" + principal+"</mark>"+",";
  document.getElementById("s2").innerHTML = "at an interest rate of <mark>" + interestRate1 + "%"+"</mark>"+".";
  document.getElementById("s3").innerHTML = "You will receive an amount of <mark>" + amount+"</mark>"+",";
  document.getElementById("s4").innerHTML = "in the year  <mark>" + years+"</mark>";

}
}
