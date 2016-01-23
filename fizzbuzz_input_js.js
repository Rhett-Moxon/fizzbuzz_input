window.addEventListener("load", function(event) {


    document.getElementById("submitButton").onclick = function() {

        var numberInput = document.getElementById("numberInput").value;

        var para = document.getElementById("para");


        if (numberInput % 3 === 0 && numberInput % 5 !== 0) {

            para.innerHTML = "FIZZ!";

        } else if (numberInput % 3 !== 0 && numberInput % 5 === 0) {

            para.innerHTML = "BUZZ!";

        } else if (numberInput % 3 === 0 && numberInput % 5 === 0) {

            para.innerHTML = "FIZZ BUZZ!";

        } else {

            para.innerHTML = numberInput;

        }

    };
});