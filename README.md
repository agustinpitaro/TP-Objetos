# Package hierarchy with the Composite pattern

A small TypeScript project that models a shipping warehouse where products can be stored directly or nested inside packages. The same operations can be applied to individual products and composite packages through a shared abstraction.

## Design

The model is an example of the **Composite design pattern**:

- `Paquete` defines the common interface used by every element.
- `PaqueteSimple` represents a leaf containing an individual product.
- `PaqueteCompuesto` represents a composite that can contain simple products or other packages.
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

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm start
```

## Build and test

```bash
npm run build
npm test
```

The test suite validates nested composition, successful removal, and removal of an absent package without mutating existing content.

## Repository contents

- `paqueteria.ts` — TypeScript implementation and executable example.
- `paqueteria.test.ts` — unit tests using Node's built-in test runner.
- `cli-diagram.d.ts` — minimal type declaration for the legacy diagram dependency.
- `tsconfig.json` — strict TypeScript compiler configuration.
- `.github/workflows/ci.yml` — automated build and test workflow.
- `UML-Diagrama de clases.PNG` — diagram preserved from the original academic project.

## Project status

Originally created as an academic exercise in 2020 and modernized with explicit dependencies, strict compilation, automated tests, and continuous integration.
