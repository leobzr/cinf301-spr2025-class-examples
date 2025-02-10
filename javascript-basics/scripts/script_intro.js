
function adder(...values) {
    let sum = 0;
    for (let value of values) {
        sum += value;
    }
    return "sum is " + sum;
}

window.onload = (function() {
    alert(adder(1,3,'hello',9));
})();

document.getElementById('buttn').onclick = function () { 
    alert(adder('a', 'b', 4));
    setTimeout(function(){
        console.log("Executed after 1 second");
    }, 1000);
};

/* Prototypes and objects */

let die1 = new Die();
document.getElementById('buttn').onclick = function () {
    die1.roll();
    alert(die1.top);
    document.getElementById('dieTop').src = die1.img.src;
};

function Die() {
    this.top = 0;
    this.img = new Image('images/d0.png');

    this.roll = function () {
        this.top = Math.floor(Math.random() * 6) + 1;
        this.img.src = "images/d" + this.top + ".png";
    };
}

document.querySelector('title').innerHTML = "Change my title";
