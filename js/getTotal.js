function getTotal() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    if (isNaN(length) || length == "") {
        alert("Please enter a correct number");
    } else if (isNaN(width) || width == "") {
        alert("Please enter a correct number");
    } else {
        if (length <= 25) {
            let total = 300;
            document.getElementById("total").innerHTML = total;
        }
        if (length > 25) {
            let total = 400;
            document.getElementById("total").innerHTML = total;
        }
    }

}
