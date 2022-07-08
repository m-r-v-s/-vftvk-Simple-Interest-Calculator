// Calculates the interest accumulated over time. 
function compute() {
    var principal = document.getElementById("principal").value;
    if (principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var res_output = `If you deposit <span class="highlighted">${principal}</span>,<br>
    at an interest rate of <span class="highlighted">${rate}%</span>,<br>
    You will receive an amount of <span class="highlighted">${interest}</span>,<br>
    in the year <span class="highlighted">${year}</span>`;
    document.getElementById("result").innerHTML = res_output; // using innerHTML to include span tags
}

// Change the value of Range span dynamically using JavaScript. 
function updateRate() {
    var current_value = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = current_value;
}

// Checks for negative values in principal input, alerts user. 
function alertIfMinimum() {
    var input_ = document.getElementById("principal")
    if (input_.value <= 0) {
        alert("Enter a positive number");
        input_.focus();
    }

}