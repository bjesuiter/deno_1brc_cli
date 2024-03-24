import { createMeasurements } from "./create-measurements.ts";

Deno.test("create 50_000 measurements", async (b) => {
  await createMeasurements(50_000, {
    measurementsFile: "./out/50_000.test.txt",
    withLogging: true,
  });
});
