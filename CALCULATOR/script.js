const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    const expression = display.value;

    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.value = Number.isFinite(result) ? result : "Error";
    } catch {
        display.value = "Error";
    }
}