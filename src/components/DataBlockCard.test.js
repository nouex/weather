import React from "react"
import { shallow  } from 'enzyme';
import DataBlockCard from "./DataBlockCard"
import {
  Card,
  CardBlock,
  CardHeader,
} from 'react-bootstrap-card';

describe('<DataBlockCard />', function () {
  it("renders a card structure", function () {
    const props = {
      dataBlockName: "hourly",
      icon: "cloudy",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles",
      time: 1505408667517 / 1000 // UNIX time in secs no ms
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)
    let cardHeader

    expect((cardHeader = wrapper.find("Card > CardBlock > CardHeader"))
      .exists()).toBeTruthy()
    expect(cardHeader.childAt(0).text()).toEqual("Thursday 12pm")
    expect(wrapper.find("Card > CardBlock > img").exists()).toBeTruthy()
    expect(wrapper.find("Card > CardBlock > div").exists()).toBeTruthy()
    expect(wrapper.find("Card > CardBlock > div").children().length)
      .toBeGreaterThan(0)
  })
});
