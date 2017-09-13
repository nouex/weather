import React from "react"
import { shallow } from 'enzyme';
import App from "./App"
import DataPage from "./DataPage"
import geolocation from "mock-geolocation"

describe('<App />', function () {
  it('renders user failure msg when jsonApiStatus === 1', function () {
    const loadJsonApi = jasmine.createSpy("loadJsonApi")
    expect(
      shallow(
        <App jsonApiStatus="1" loadJsonApi={loadJsonApi}/>).getNode() )
      .toEqual(
        <h1>Failure to retrieve json data.  Try again? ¯\_(ツ)_/¯</h1>
      )
    expect(loadJsonApi).not.toHaveBeenCalled()
  })

  it("renders <DataPage /> when jsonApiStatus === 0", function () {
    const loadJsonApi = jasmine.createSpy("loadJsonApi")
    expect(
      shallow(
        <App jsonApiStatus="0" loadJsonApi={loadJsonApi}/>).getNode() )
      .toEqual(
        <DataPage />
      )
    expect(loadJsonApi).not.toHaveBeenCalled()
  })

  describe('when jsonApiStatus === -1', function () {
    it("and geolocation is not enabled", function () {
      const loadJsonApi = jasmine.createSpy("loadJsonApi")
      expect(
        shallow(
          <App jsonApiStatus={-1} loadJsonApi={loadJsonApi}/>).getNode())
        .toEqual(
          <h1> Geolocation must be enabled to get local weather data</h1>
        )
      expect(loadJsonApi).not.toHaveBeenCalled()
    })

    it("and geolocation is enabled, dispatch loadJsonApi()", function () {
      const loadJsonApi = jasmine.createSpy("loadJsonApi")
      geolocation.use()

      expect(
        shallow(
          <App jsonApiStatus={-1} loadJsonApi={loadJsonApi}/>).getNode())
        .toEqual(null)
      expect(loadJsonApi).toHaveBeenCalled()
    })
  });
})
