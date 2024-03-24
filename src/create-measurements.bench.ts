import { createMeasurements } from "./create-measurements.ts";

Deno.bench("Measurement creation", async (b) => {
  await createMeasurements(50_000, {
    measurementsFile: "./50_000.bench.txt",
    withLogging: false,
  });
});
