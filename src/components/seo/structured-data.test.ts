import assert from "node:assert/strict";
import test from "node:test";

import { buildStructuredDataGraph } from "./structured-data-graph.ts";

test("associates every approved name variant with the same person entity", () => {
  const graph = buildStructuredDataGraph();
  const person = graph.find((entity) => entity["@id"] === "https://enhancior.se/#person");

  assert.ok(person);
  assert.equal(person.name, "Rasmus Alestig Thunborg");
  assert.deepEqual(person.alternateName, ["Rasmus Thunborg", "Rasmus Alestig"]);
  assert.equal(person.url, "https://enhancior.se/about");
  assert.deepEqual(person.worksFor, { "@id": "https://enhancior.se/#organization" });
});
