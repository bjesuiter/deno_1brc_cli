import { MersenneTwister19937, real } from "npm:random-js@2.1.0";

// NOTE: You can make the random number generator more predictable by seeding it with a fixed value.
const engine = MersenneTwister19937.autoSeed();

export class WeatherStation {
  constructor(
    public readonly id: string,
    public readonly meanTemperature: number,
  ) {
  }

  // Gets a new random value for the temperature based on:
  // the meanTemperature for that wheather station +- Standard deviation of 10
  // Original Code:
  // ----------------
  // measurement(): number {
  //   number m = ThreadLocalRandom.current().nextGaussian(this.meanTemperature, 10);
  //   return Math.round(m * 10.0) / 10.0;
  // }
  measurement(): number {
    // CAUTION: Depending on the input data, this.meanTemperature +- 10 might go over the bounds of
    // -99.9 and 99.9. This is not handled in the code below bc. I assume, that the original 1brc seed
    // uses meanTemperature values that are way within these bounds.
    const distribution = real(
      this.meanTemperature - 10,
      this.meanTemperature + 10,
      true,
    );

    // gets the next random number based on this distribution from the engine
    return distribution(engine);
  }
}

export function createMeasurements() {
}
