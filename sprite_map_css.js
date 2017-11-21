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

function config(intrinsicCellWidth, rows, columns, map, url) {
  // NOTE: instrinsic cell height is disregarding b/c we assume it's a square
  return function matrixPosToCss(iw, midfix) {
    let retMap2 = Object.create(null),
        scaledSpriteW = (iw / intrinsicCellWidth) * (intrinsicCellWidth * columns),
        scaledSpriteH = iw * rows

    midfix = midfix && midfix.length ? midfix + "-" : ""

    Object.keys(map).map((key) => {
      let [x, y] = map[key],
          startX, startY

      startX = iw * (x -1)
      startY = iw * (y -1)
      return [key,[startX === 0 ? 0 : -startX, startY === 0 ? 0 : -startY]]
    }).forEach(([key, [offX, offY]]) => {
      retMap2[key] =
      `.icon-${midfix}${key} {
      width: ${iw}px;
      height: ${iw}px;
      background: url(${url}) ${offX}px ${offY}px;
      background-size: ${scaledSpriteW}px ${scaledSpriteH}px; }

      `
    })

    function joinCss(map) {
      return Object.keys(map).map((key) => map[key]).join("")
    }

    return joinCss(retMap2)
  }
}



/**
 * public/weather_icons.png
 *  + intrinsic size:           580 x 696
 *  + tot. images:              5 x 6
 *  + single img. dimensions:   116 x 116
 *
 *  Usage: node sprite_map_css.js > src/css/icons.css
 */

let matrixPosToCss = config(116, 6, 5, map, "\"../imgs/weather_icons.png\"")
console.log(matrixPosToCss(116))
console.log(matrixPosToCss(40, "sm"))
