import Diagram = require('cli-diagram');

abstract class paqueteAbs {
    abstract mostrar();

}

class paqueteSimple extends paqueteAbs {
    name: string;
    myDiagram: Diagram;
    constructor(name: string){ 
        super();
        this.name = name; 
        this.myDiagram = new Diagram();
        this.myDiagram.box(this.name);
        
    }

    mostrar(){
        
        console.log(this.myDiagram.draw()); 
    
    }
}

class paqueteCompuesto extends paqueteAbs{
    name: string;
    list: Array<paqueteAbs>;
    myDiagram: Diagram;

    constructor(name: string){ 
        super();
        this.list = new Array<paqueteAbs>();
        this.name = name; 
        this.myDiagram = new Diagram();
        this.myDiagram.container(this.name); 
    }

    mostrar(){
        
        console.log(this.myDiagram.draw()); 
        console.log("________________________________"); //El metodo line() no funciona
        this.list.forEach(paqueteAbs => {
            paqueteAbs.mostrar();   
          }
         )
        ;
        console.log("________________________________"); //El metodo line() no funciona   
    }

    addPaquete(paquete:paqueteAbs){
        this.list.push(paquete);

    }
    removePaquete(paquete:paqueteAbs){
        this.list = this.list.splice(this.list.indexOf(paquete), 1);
        
    }
}

let p1 = new paqueteSimple("p1");
let p2 = new paqueteSimple("p2");
let p3 = new paqueteSimple("p3");
let p4 = new paqueteSimple("p4");
p1.mostrar();
p2.mostrar();
p3.mostrar();
p4.mostrar();

let pc1 = new paqueteCompuesto("pc1");
let pc2 = new paqueteCompuesto("pc2");
let pc3 = new paqueteCompuesto("pc3");

pc1.addPaquete(p1);
pc1.addPaquete(p2);
pc2.addPaquete(p3);
pc2.addPaquete(p4);
pc3.addPaquete(pc1);
pc3.addPaquete(pc2);

pc1.mostrar();
pc2.mostrar();
pc3.mostrar();



