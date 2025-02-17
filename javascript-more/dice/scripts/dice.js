/**
 * Demo Javascript code for rolling a single die or collection of dice.
 *
 */

let gameNum = 1;

document.getElementById('buttn').onclick = function () {
    dice.dice.forEach((die, index) => {
        die.roll();
        document.getElementById('d' + index).src = die.img.src;
    });
    var maxDie = dice.dice.reduce((prev, next) => prev.top > next.top ? prev : next);
    updateTable(maxDie.top);
}

/**
 * When die is selected, add or remove border; note that this is handled
 * differently with different browsers
 * 
 * You can get styles and properties directly, e.g. 
 *      let styles = window.getComputedStyle(element);
 *      let borderProp = styles.getPropertyValue('border');
 * Try in browser with page open
 */
function dieClicked(event) {
    let element = document.getElementById(event.target.id);
    element.isSelected = !element.isSelected;
    element.isSelected ? element.style.border = '2px solid #021a40'
        : element.style.border = 'none';
}

/**
 * Dynamically update the table, adding a row indicating the max value
 * of die rolled for each 'game'
 *
 * @param val
 */
let updateTable = function (val) {
    let row = document.getElementById('tableScores').insertRow(gameNum);
    gameNum++;
    row.insertCell(0).innerHTML = 'Game #' + gameNum;
    row.insertCell(1).innerHTML = 'Max Roll: ' + val.toString();
};

/*
 * Prototypes
 */
function Die(top) {
    this.top = top;
    this.img = new Image();
    this.img.src = 'images/d' + top + '.png';
    this.isSelected = false;
}

Die.prototype.roll = function () {
    this.top = Math.floor(Math.random() * 6) + 1;
    this.img.src = 'images/d' + this.top + '.png';
};


function Dice(numDice) {
    this.numberOfDice = numDice;
    this.dice = [];
    this.create = function () {
        for (let i = 0; i < this.numberOfDice; i++) {
            this.dice.push(new Die(i));
            document.getElementById('d' + i).addEventListener('click', dieClicked);
        }
    };
    this.create();
}

let dice = new Dice(5);
