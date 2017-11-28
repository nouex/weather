import React from "react"
import { shallow  } from 'enzyme';
import Header from "./Header"
import util from "../util"

/**
 * TODO:
 *  1. test that it calls upLocalTime() when localTim === null
 *  2. this is one of the first tests i wrote using enzyme, nowadays i just
 *    assert the basic structure and not the details b/c then every micro change
 *    will break
 */

describe('<Header />', function () {
  it("renders icon, temp, location, and date", function () {
    const props = {
      latitude: 47.20296790272209,
      longitude: -123.41670367098749,
      icon: "rain",
      time: 1505247126,
      timezone: "America/Los_Angeles",
      temperature: 48.71,
      summary: "rain and water",
      upLocalTime: () => { },
      localTime: null,
      unit: "us"
    }
    const wrapper = shallow(<Header {...props}/>)

    // NOTE: a real test would mock moment.fromNow() or the system time to
    //  be consistent or Date if that's where moment get's it's time from
    expect(wrapper.getNode()).toEqual(
      <header className="text-center bg-light align-middle p-3">
          <div style={{
            position: "absolute",
            marginRight: 0,
            marginLeft: "auto",
            left: "auto",
            right: 0
          }}
          className="m-3">Matlock, WA</div>
          <img src="transparent.png" className={ `icon-${props.icon}` }/>
          <div>{ props.summary }</div>
          <div>48°F</div>
          <div><date>{ "1:12pm PDT" }</date></div>
          <div className="text-secondary" style={{ fontSize: "0.8em" }}>Last updated {jasmine.any(String)}</div>
        </header>
    )
  })
});
