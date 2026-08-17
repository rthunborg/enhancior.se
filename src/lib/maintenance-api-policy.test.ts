import assert from "node:assert/strict";
import test from "node:test";

import { getMaintenanceApiPolicy } from "./maintenance-api-policy.ts";

test("keeps the real contact endpoint temporarily unavailable while the site is paused", () => {
  assert.deepEqual(getMaintenanceApiPolicy("/api/contact"), {
    status: 503,
    body: { error: "Begäran kan inte hanteras." },
    headers: { "Retry-After": "3600" },
  });
});

test("classifies unknown API scanner probes as not found", () => {
  for (const pathname of [
    "/api/.env",
    "/api/graphql",
    "/api/config",
    "/api/contact/unknown",
  ]) {
    assert.deepEqual(getMaintenanceApiPolicy(pathname), {
      status: 404,
      body: { error: "Resursen hittades inte." },
    });
  }
});
