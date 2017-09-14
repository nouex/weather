'use strict';

const map = {
  "clear-day":            [1, 3],
  "clear-night":          [5, 5],
  "rain":                 [5, 4],
  "snow":                 [4, 1],
  "sleet":                [5, 2],
  "wind":                 [3, 3],
  "fog":                  [2, 4],
  "cloudy":               [4, 3],
  "partly-cloudy-day":    [2, 3],
  "partly-cloudy-night":  [2, 6]
}

function matrixPosToCss(map, iw, ih, url) {
  let retMap1 = Object.create(null),
      retMap2 = Object.create(null)

  Object.keys(map).forEach((key) => {
    let [x, y] = map[key],
        startX, startY

    startX = iw * (x -1)
    startY = ih * (y -1)
    retMap1[key] = [startX === 0 ? 0 : -startX, startY === 0 ? 0 : -startY]
  })

  Object.keys(retMap1).forEach((key) => {
    let [offX, offY] = retMap1[key]

    retMap2[key] =
    `.icon-${key} {
      width: ${iw}px;
      height: ${ih}px;
      background: url(${url}) ${offX}px ${offY}px;  }

      `
  })

  function joinCss(map) {
    return Object.keys(map).map((key) => map[key]).join("")
  }

  return joinCss(retMap2)
}



/**
 * public/weather_icons.png
 *  + intrinsic size:           580 x 696
 *  + tot. images:              5 x 6
 *  + single img. dimensions:   116 x 116
 *
 *  Usage: node sprite_map_css.js > src/css/icons.css
 */

console.log(matrixPosToCss(map, 116, 116, "\"../imgs/weather_icons.png\""))
