window.onload = function () {
    window.addEventListener('keydown', keypress);

    var button = document.getElementById("button1");
    button.addEventListener("mouseover", onMouseover);
    button.addEventListener("click", onClick);
    button.addEventListener("mouseout", onMouseout);
}

function keypress() {
    console.log("Keypress Detected");
    document.getElementById("hidden").style.display = 'block';
    document.getElementById("button1").style.display = 'block';
}

function onMouseover() {
    console.log("mouseOver");
    document.getElementById("mouseEvent").innerHTML += "WAIT! Don't click me!</br>";
}

function onClick() {
    console.log("click");
    document.getElementById("mouseEvent").innerHTML += "How could you?!?!</br>";
    alert("SELF DESTRUCT INITIATED.");
}

function onMouseout() {
    console.log("mouseOut");
    document.getElementById("mouseEvent").innerHTML += "NO PLEASE! Click me!</br>";
}