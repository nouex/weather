'use strict';

import t from "./toFixed"

describe('temperature()', function () {
  it('strips down to n after decimal', function () {
    expect(t(7.1534, 2)).toEqual("7.15")
    // default n = 1
    expect(t(7.00000000000)).toEqual("7.0")
  });
});
