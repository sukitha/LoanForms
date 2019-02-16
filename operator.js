var slider_annual = document.getElementById("slider_annual");
var output_annual = document.getElementById("output_annual");
var slider_loan = document.getElementById("slider_loan");
var output_loan = document.getElementById("output_loan");
output_annual.innerHTML = slider_annual.value; // Display the default slider value
output_loan.innerHTML = slider_loan.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider_annual.oninput = function() {
    output_annual.innerHTML = this.value;
}
slider_loan.oninput = function() {
    output_loan.innerHTML = this.value;
}