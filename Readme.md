# 1brc_cli

A simple package/cli to generate measurement data for the 1 billion row challenge (1brc).

Repo: https://github.com/codemonument/deno_1brc_cli

Inspiration: The original [CreateMeasurements.java](https://github.com/gunnarmorling/1brc/blob/main/src/main/java/dev/morling/onebrc/CreateMeasurements.java#L28) file from the 1brc repo.

Official 1brc page: https://1brc.dev/#

## Data Format

Each line within the output file contains a weather station name and a temperature reading in the format <station name>;<temperature>, where station name may have spaces and other special characters excluding ;, and the temperature is a floating-point number ranging from -99.9 to 99.9 with precision limited to one decimal point.

## Useful Docs

- Streaming write with deno: https://examples.deno.land/streaming-files
