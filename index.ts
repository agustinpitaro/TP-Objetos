import Diagram = require('cli-diagram');

let myDiagram = new Diagram();

myDiagram.box(`Amazing`);

console.log(myDiagram.draw());