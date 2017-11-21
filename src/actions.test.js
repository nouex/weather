/**
 * TODO: an action creator's sole purpose should be to return an action.  In the
 *  future stop using thunks and start using alternatives such as react-logic or
 *  react-saga.
 */

import geolocation from "mock-geolocation"
import xhrMock from "xhr-mock"
import actions from "./actions"
const loadJsonApi = actions.loadJsonApi
const upLocalTime = actions.upLocalTime

describe('loadJsonApi()', function () {
  it("returns a function", function () {
    expect(loadJsonApi()).toEqual(jasmine.any(Function))
  })

  it("ret fn dispatches setJsonApiStatus(1) on loc. req. err", function (done) {
    geolocation.use()
    loadJsonApi()(function (action) {
      expect(action).toEqual(actions.setJsonApiStatus(1))
      done()
    })
    geolocation.sendError({code: 1, message: "sum error"})
  })

  it("ret fn dispatches setJsonApiStatus(0, data) on success", function (done) {
    function specDone() {
      xhrMock.teardown()
      done()
    }

    const location = {
      latitude: "42.3601",
      longitude: "-71.0589"
    }

    const resBody = { Fredo: "Krueger" }

    xhrMock.setup()
    xhrMock.get(`/weather/${location.latitude}/${location.longitude}`, function(req, res) {
        return res
          .status(200)
          .body(resBody);
      });

    geolocation.use()
    loadJsonApi(new xhrMock.XMLHttpRequest())(function (action) {
      expect(action).toEqual(actions.setJsonApiStatus(0, resBody))
      specDone()
    })
    geolocation.send(location)
  })

  it("ret fn dispatches setJsonApiStatus(1) on bad statusCode", function (done) {
    function specDone() {
      xhrMock.teardown()
      done()
    }

    const location = {
      latitude: "42.3601",
      longitude: "-71.0589"
    }

    const resBody = { Glory: "Boys" }

    xhrMock.setup()
    xhrMock.get(`/weather/${location.latitude}/${location.longitude}`, function(req, res) {
        return res
          .status(404)
          .body(resBody);
      });

    geolocation.use()
    loadJsonApi(new xhrMock.XMLHttpRequest())(function (action) {
      expect(action).toEqual(actions.setJsonApiStatus(1))
      specDone()
    })
    geolocation.send(location)
  })

  xit("ret fn dispatches setJsonApiStatus(1) on xhr cb(err)", function (done) {
    function specDone() {
      xhrMock.teardown()
      done()
    }

    const location = {
      latitude: "42.3601",
      longitude: "-71.0589"
    }

    const resBody = { Glory: "Boys" }

    xhrMock.setup()
    xhrMock.get(`/weather/${location.latitude}/${location.longitude}`, function(req, res) {
        // https://github.com/jameslnewell/xhr-mock#simulate-an-error
        return new Promise.reject()
      });

    geolocation.use()
    loadJsonApi(new xhrMock.XMLHttpRequest())(function (action) {
      expect(action).toEqual(actions.setJsonApiStatus(1))
      specDone()
    })
    geolocation.send(location)
  })
});

describe('upLocalTime()', function () {
  let fn
  it('returns a function', function () {
    fn = upLocalTime()
    expect(fn).toEqual(jasmine.any(Function))
  });

  xit('fn() sets fn to be called after 20 secs', function (done) {
    // I can't figure a way to test it.  upLocalTime() return a new function
    // expression each time it's called so syping on fn is no use.
  });

  it('fn() dispatches UP_LOCAL_TIME', function (done) {
    fn((o) => {expect(o.type).toEqual("UP_LOCAL_TIME"); done()})
  });
});
