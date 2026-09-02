import Diagram = require("cli-diagram");

export abstract class Paquete {
  abstract mostrar(): void;
}

export class PaqueteSimple extends Paquete {
  private readonly diagram: Diagram;

  constructor(public readonly nombre: string) {
    super();
    this.diagram = new Diagram();
    this.diagram.box(nombre);
  }

  mostrar(): void {
    console.log(this.diagram.draw());
  }
}

export class PaqueteCompuesto extends Paquete {
  private readonly elementos: Paquete[] = [];
  private readonly diagram: Diagram;

  constructor(public readonly nombre: string) {
    super();
    this.diagram = new Diagram();
    this.diagram.container(nombre);
  }

  get contenido(): readonly Paquete[] {
    return this.elementos;
  }

  mostrar(): void {
    console.log(this.diagram.draw());
    console.log("________________________________");
    this.elementos.forEach((paquete) => paquete.mostrar());
    console.log("________________________________");
  }

  agregar(paquete: Paquete): void {
    this.elementos.push(paquete);
  }

  eliminar(paquete: Paquete): boolean {
    const index = this.elementos.indexOf(paquete);

    if (index === -1) {
      return false;
    }

    this.elementos.splice(index, 1);
    return true;
  }
}

export function ejecutarEjemplo(): void {
  const p1 = new PaqueteSimple("p1");
  const p2 = new PaqueteSimple("p2");
  const p3 = new PaqueteSimple("p3");
  const p4 = new PaqueteSimple("p4");

  const pc1 = new PaqueteCompuesto("pc1");
  const pc2 = new PaqueteCompuesto("pc2");
  const pc3 = new PaqueteCompuesto("pc3");

  pc1.agregar(p1);
  pc1.agregar(p2);
  pc2.agregar(p3);
  pc2.agregar(p4);
  pc3.agregar(pc1);
  pc3.agregar(pc2);

  pc1.mostrar();
  pc2.mostrar();
  pc3.mostrar();
}

if (require.main === module) {
  ejecutarEjemplo();
}
