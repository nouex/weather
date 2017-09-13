import geo from "./geo"
import geolocation from "mock-geolocation"

describe('geo', function () {
  describe('when not enabled', function () {
    it("availability sniff returns false", function () {
      expect(geo.enabled()).toBe(false)
    })
  });

  describe('when enabled', function () {
    const geoConfig = {
      latitude: "42.3601",
      longitude: "-71.0589"
    }

    beforeAll(function () {
      geolocation.use()
    })

    it("availability sniff returns true", function () {
      expect(geo.enabled()).toBe(true)
    })

    it("gets location with no error", function (done) {
      geo.getLocation(function (locArr) {
        expect(locArr[0]).toEqual(geoConfig.latitude)
        expect(locArr[1]).toEqual(geoConfig.longitude)
        done()
      }, fail.bind(void 0, "error was not expected"))
      geolocation.send(geoConfig)
    })

    it("getLocation() err cb called on err", function (done) {
      const permErr = {code: 1, message: "PERMISSION DENIED"}
      geo.getLocation(fail.bind(void 0, "should not have called me"), (e) => {
        expect(e).toEqual(permErr)
        done()
      })
      geolocation.sendError(permErr)
    })
  });
});
