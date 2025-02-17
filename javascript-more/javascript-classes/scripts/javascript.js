class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

var poly1 = new Polygon();

document.getElementById('here').innerHTML = poly1.name;
// expected output: "Polygon"
