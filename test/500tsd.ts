import { createMeasurements } from "../src/create-measurements.ts";

const count = 500_000;
await createMeasurements(count, {
  measurementsFile: `./out/${count.toLocaleString("en")}.test.txt`,
  withLogging: true,
  withProfiling: true,
});
