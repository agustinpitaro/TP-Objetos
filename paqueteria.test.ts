import assert from "node:assert/strict";
import test from "node:test";

import { PaqueteCompuesto, PaqueteSimple } from "./paqueteria";

test("adds simple and composite packages", () => {
  const producto = new PaqueteSimple("producto");
  const interior = new PaqueteCompuesto("interior");
  const exterior = new PaqueteCompuesto("exterior");

  exterior.agregar(producto);
  exterior.agregar(interior);

  assert.deepEqual(exterior.contenido, [producto, interior]);
});

test("removes only the requested package", () => {
  const primero = new PaqueteSimple("primero");
  const segundo = new PaqueteSimple("segundo");
  const compuesto = new PaqueteCompuesto("compuesto");

  compuesto.agregar(primero);
  compuesto.agregar(segundo);

  assert.equal(compuesto.eliminar(primero), true);
  assert.deepEqual(compuesto.contenido, [segundo]);
});

test("returns false and preserves content when the package is absent", () => {
  const existente = new PaqueteSimple("existente");
  const ausente = new PaqueteSimple("ausente");
  const compuesto = new PaqueteCompuesto("compuesto");

  compuesto.agregar(existente);

  assert.equal(compuesto.eliminar(ausente), false);
  assert.deepEqual(compuesto.contenido, [existente]);
});
