import { createMeasurements } from "./create-measurements.ts";

Deno.test("create 50_000 measurements", async (b) => {
  const count = 50_000;
  await createMeasurements(count, {
    measurementsFile: `./out/${count}.test.txt`,
    withLogging: true,
  });
});

// took 54872ms! :O
Deno.test("create 5_000_000 measurements", async (b) => {
  const count = 5_000_000;
  await createMeasurements(count, {
    measurementsFile: `./out/${count}.test.txt`,
    withLogging: true,
  });
});
