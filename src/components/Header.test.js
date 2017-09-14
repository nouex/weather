import React from "react"
import { shallow  } from 'enzyme';
import Header from "./Header"

describe('<Header />', function () {
  it("renders icon, temp, location, and date", function () {
    const props = {
      latitude: 47.20296790272209,
      longitude: -123.41670367098749,
      icon: "rain",
      time: 1505247126663,
      timezone: "America/Los_Angeles",
      temperature: 48.71
    }
    const wrapper = shallow(<Header {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <header className="sticky-top text-center bg-light align-middle p-3">
        <div style={{
          position: "absolute",
          marginRight: 0,
          marginLeft: "auto",
          left: "auto",
          right: 0
        }}
        className="m-3">Matlock, WA</div>
        <img src="./icons/rain.png"  />
        <div>{ props.temperature }°F</div>
        <div><date>{ "9:51am PST" }</date></div>
      </header>    )
  })
});
