'use strict';

/* Revealing Module Pattern -- exp */

import moment from "moment-timezone"

const exp = {
  // NOTE: "Geolocation API is available only in secure contexts (HTTPS),
  //  in some or all supporting browsers."
  geo: {
    enabled: () => "geolocation" in navigator ? true : false,
    getLocation: (cb, cbe) => {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          // [ latitude, longitude ]
          cb([ pos.coords.latitude, pos.coords.longitude ])
        },
        (cbe || (() => {}))
      );
    }
  },
  iconToUrl: (icon) => `./icons/${icon}.png`,
  toInt: (n) => ~~n,
  unixTime: t => t * 1000,
  dataHumanizers: {
    percent: (val) => `${exp.toInt(val * 100)}%`,
    fahrenheit: (val) => `${exp.toInt(val)}°F`,
    celsius: (val) => `${exp.toInt(val)}°C`,
    lunation: (val) => {
      // 1. map moon phases to values
      let phases = [
        "New Moon", "Waxing Crescent", "1st Quarter", "Waxing Gibbous",
        "Full Moon", "Waning Gibbious", "3rd Quarter", "Waning Crescent"
      ]
      let part = 1 / phases.length,
          currPart = 0 - part
      phases = phases.map((phaseName) => {
        currPart += part
        return [currPart, phaseName]
      })

      // 2. determine current moon phase by looking for index closest to val
      let indOfClosest
      phases.reduce((prev, curr, ind) => {
        let [phaseVal, phaseName] = curr
        if (Math.abs(val - phaseVal) < prev) {
          indOfClosest = ind
          return val - phaseVal
        } else return prev
      }, Infinity)

      return phases[indOfClosest][1]
    },
    millibars: (val) => `${exp.toInt(val)} Mbar`,
    hectopascals: (val) => `${exp.toInt(val)} hPa`,
    "<as is>": (val) => `${val}`,
    "unix time": (val,timezone) => `${moment.tz(exp.unixTime(val), timezone).format('h:mma z')}`,// FIXME
    mph: (val) => `${exp.toInt(val)} mph`, // miles pers hr
    kps: (val) => `${exp.toInt(val)} kps`, // km pers sec
    mps: (val) => `${exp.toInt(val)} mps`, // meters per sec
    mi: (val) => `${exp.toInt(val)} miles`,
    km: (val) => `${exp.toInt(val)} km`,
    inh: (val) => `${exp.toInt(val)} in/h`, // inches per hour
    mmh: (val) => `${exp.toInt(val)} mm/h`, // mm per hour
    cm: (val) => `${exp.toInt(val)} cm`,
    in: (val) => `${exp.toInt(val)} in`,
  }
}

export default exp
