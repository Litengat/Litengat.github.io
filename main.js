
const carrater1 = "b"
const carrater2 = "B"
const replace = ":WeissL:"
function calc() {
    var input = document.getElementById("input").value;
    var output = "";

    input = input.replaceAll(carrater1,replace);
    input = input.replaceAll(carrater2,replace);

    document.getElementById("output").innerText = input;
}