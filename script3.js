function changeColor() {
    let box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "blue" ? "red" : "blue";
}
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});
document.getElementById("hoverButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});
