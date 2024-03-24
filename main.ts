import { createMeasurements } from "./src/create-measurements.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await createMeasurements(1_000_000_000, "./measurements.txt");
}
