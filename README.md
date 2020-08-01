# TP-Objetos(Paqueteria)

Se trata de una paqueteria, donde se almacenan cajas. Dentro de esas cajas puede haber un producto o mas cajas con productos.

La libreria 'cli-diagram' es utilizada para graficar la composicion de las cajas del deposito.
# Comandos NPM
- "npm install": Instala las dependencias necesarias.
- "npm start": Crea el archivo paqueteria.js a partir del paqueteria.ts.
- "npm test": Ejecuta el ejemplo.

# Ejemplo

Crea 4 productos simples(p1,p2,p3,p4) y los muestra:
```sh
┌────────┐
│        │
│   p1   │
│        │
└────────┘
┌────────┐
│        │
│   p2   │
│        │
└────────┘
┌────────┐
│        │
│   p3   │
│        │
└────────┘
┌────────┐
│        │
│   p4   │
│        │
└────────┘
```
Crea 3 paquetes compuestos(pc1,pc2,pc3). En pc1 agrega p1 y p2, en pc2 agrega p3 y p4 y en pc3 agrega pc1 y pc2. Luego muestra toda la jerarquia.
```sh
pc1
________________________________
┌────────┐
│        │
│   p1   │
│        │
└────────┘
┌────────┐
│        │
│   p2   │
│        │
└────────┘
________________________________
pc2
________________________________
┌────────┐
│        │
│   p3   │
│        │
└────────┘
┌────────┐
│        │
│   p4   │
│        │
└────────┘
________________________________

pc3
________________________________
pc1
________________________________
┌────────┐
│        │
│   p1   │
│        │
└────────┘
┌────────┐
│        │
│   p2   │
│        │
└────────┘
________________________________
pc2
________________________________
┌────────┐
│        │
│   p3   │
│        │
└────────┘
┌────────┐
│        │
│   p4   │
│        │
└────────┘
________________________________
________________________________
```
