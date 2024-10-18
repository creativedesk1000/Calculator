const display = document.getElementById("myNumber");


function clearInput(value) {
    document.getElementById("myNumber").value = '';
}
function appendToInput(value) {
    display.value += value;
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}




function calculate(value) {
    try {
        display.value = eval(display.value);

    }
    catch (error) {
        display.value = "Error";
    }

}