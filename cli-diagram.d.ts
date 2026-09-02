declare module "cli-diagram" {
  class Diagram {
    box(content: string): this;
    container(content: string): this;
    draw(): string;
  }

  export = Diagram;
}
