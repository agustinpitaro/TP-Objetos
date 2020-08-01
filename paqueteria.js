"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Diagram = require("cli-diagram");
var paqueteAbs = /** @class */ (function () {
    function paqueteAbs() {
    }
    return paqueteAbs;
}());
var paqueteSimple = /** @class */ (function (_super) {
    __extends(paqueteSimple, _super);
    function paqueteSimple(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.myDiagram = new Diagram();
        _this.myDiagram.box(_this.name);
        return _this;
    }
    paqueteSimple.prototype.mostrar = function () {
        console.log(this.myDiagram.draw());
    };
    return paqueteSimple;
}(paqueteAbs));
var paqueteCompuesto = /** @class */ (function (_super) {
    __extends(paqueteCompuesto, _super);
    function paqueteCompuesto(name) {
        var _this = _super.call(this) || this;
        _this.list = new Array();
        _this.name = name;
        _this.myDiagram = new Diagram();
        _this.myDiagram.container(_this.name);
        return _this;
    }
    paqueteCompuesto.prototype.mostrar = function () {
        console.log(this.myDiagram.draw());
        console.log("________________________________"); //El metodo line() no funciona
        this.list.forEach(function (paqueteAbs) {
            paqueteAbs.mostrar();
        });
        console.log("________________________________"); //El metodo line() no funciona   
    };
    paqueteCompuesto.prototype.addPaquete = function (paquete) {
        this.list.push(paquete);
    };
    paqueteCompuesto.prototype.removePaquete = function (paquete) {
        this.list = this.list.splice(this.list.indexOf(paquete), 1);
    };
    return paqueteCompuesto;
}(paqueteAbs));
var p1 = new paqueteSimple("p1");
var p2 = new paqueteSimple("p2");
var p3 = new paqueteSimple("p3");
var p4 = new paqueteSimple("p4");
p1.mostrar();
p2.mostrar();
p3.mostrar();
p4.mostrar();
var pc1 = new paqueteCompuesto("pc1");
var pc2 = new paqueteCompuesto("pc2");
var pc3 = new paqueteCompuesto("pc3");
pc1.addPaquete(p1);
pc1.addPaquete(p2);
pc2.addPaquete(p3);
pc2.addPaquete(p4);
pc3.addPaquete(pc1);
pc3.addPaquete(pc2);
pc1.mostrar();
console.log("\n");
pc2.mostrar();
console.log("\n");
pc3.mostrar();
