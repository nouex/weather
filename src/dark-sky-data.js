'use strict';

// TODO: rename
const unit = {
  us: {
    apparentTemperature: {
      optional: true,
      unit: "fahrenheit",
      desc: "Feels Like",
      omittedByDataBlks: ["daily"]
    },
    cloudCover: {
      optional: true,
      unit: "percent",
      desc: "Cloud Cover"
    },
    dewPoint: {
      optional: true,
      unit: "fahrenheit",
      desc: "Dew Point"
    },
    humidity: {
      optional: true,
      unit: "percent",
      desc: "Humidity"
    },
    moonPhase: {
      optional: true,
      unit: "lunation",
      omittedByDataBlks: [ "minutely", "hourly" ],
      desc: "Moon Phase"
    },
    precipProbability: {
      optional: true,
      unit: "percent",
      desc: "Chance of Precipication"
    },
    precipIntensity: {
      optional: true,
      unit: "inh",
      desc: "Intensity of Precipitation"
    },
    precipIntensityMax: {
      optional: true,
      unit: "inh",
      desc: "Max Intensity of Precipitation",
      omittedByDataBlks: ["minutely", "hourly"]
    },
    precipAccumulation: {
      optional: true,
      unit: "in",
      desc: "Amount of Snowfall",
      omittedByDataBlks: ["minutely"]
    },
    pressure: {
      optional: true,
      unit: "millibars",
      desc: "Atmospheric Pressure"
    },
    summary: {
      optional: true,
      unit: "<as is>",
      desc: "",
      omittedByDataBlks: ["minutely", "hourly", "daily"]
    },
    sunriseTime: {
      optional: true,
      unit: "unix time",
      omittedByDataBlks: [ "minutely", "hourly" ],
      desc: "Sunrise"
    },
    sunsetTime: {
      optional: true,
      unit: "unix time",
      omittedByDataBlks: [ "minutely", "hourly" ],
      desc: "Sunset"
    },
    temperature: {
      optional: true,
      unit: "fahrenheit",
      omittedByDataBlks: [ "minutely" ],
      desc: "Temperature"
    },
    temperatureHigh: {
      optional: true,
      unit: "fahrenheit",
      omittedByDataBlks: [ "minutely", "hourly" ],
      desc: "High"
    },
    temperatureLow: {
      optional: true,
      unit: "fahrenheit",
      omittedByDataBlks: [ "minutely", "hourly" ],
      desc: "Low"
    },
    windGust: {
      optional: true,
      unit: "mph",
      desc: "Wind Gust"
    },
    windSpeed: {
      optional: true,
      unit: "mph",
      desc: "Wind Speed"
    },
    visibility: {
      optional: true,
      unit: "mi",
      desc: "Visibility"
    }
  }
};

export default unit
