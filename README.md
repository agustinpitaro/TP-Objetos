# Package hierarchy with the Composite pattern

An academic TypeScript project that models a shipping warehouse where products can be stored directly or nested inside packages. The same operations can be applied to individual products and composite packages through a shared abstraction.

## Design

The model is an example of the **Composite design pattern**:

- `paqueteAbs` defines the common interface used by every element.
- `paqueteSimple` represents a leaf containing an individual product.
- `paqueteCompuesto` represents a composite that can contain simple products or other packages.
- `cli-diagram` renders the resulting hierarchy in the terminal.

This structure allows clients to treat individual and nested elements uniformly.

## Example hierarchy

```text
pc3
├── pc1
│   ├── p1
│   └── p2
└── pc2
    ├── p3
    └── p4
```

The included example creates four simple products, groups them into two packages, and then combines both packages into a third composite package.

## Repository contents

- `paqueteria.ts` — original TypeScript implementation and executable example.
- `paqueteria.js` — generated JavaScript preserved from the original project.
- `UML-Diagrama de clases.PNG` — class diagram of the model.
- `package.json` — original project metadata and scripts.

## UML

![Class diagram](./UML-Diagrama%20de%20clases.PNG)

## Project status

This repository preserves an academic implementation from 2020. Its main purpose is to demonstrate object-oriented modeling, recursive composition, and the Composite pattern.

The dependency setup and automated tests are intentionally left for a separate modernization pass before adding continuous integration.
