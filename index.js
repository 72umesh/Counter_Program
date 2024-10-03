// Counter Program

const countLabel = document.getElementById("countLabel");
count = 0;

// Decrease
document.getElementById("decreaseButton").onclick = function(){
    count--;
    countLabel.textContent = count;
}
// Reset
document.getElementById("resetButton").onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
// Increase
document.getElementById("increaseButton").onclick = function(){
    count++;
    countLabel.textContent = count;
}