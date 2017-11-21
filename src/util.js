'use strict';

// NOTE: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

const geo = {
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
}

export default {
  geo,
  iconToUrl: (icon) => `./icons/${icon}.png`,
  toInt: (n) => ~~n,
  unixTime: t => t * 1000
}
