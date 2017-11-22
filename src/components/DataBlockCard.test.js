// TODO: there has to be a leaner way to use named exports for unitConversions
import * as dataBlockCardExport from "./DataBlockCard"
import React from "react"
import { shallow  } from 'enzyme';
import DataBlockCard from "./DataBlockCard"
import {
  Card,
  CardBlock,
  CardHeader,
} from 'react-bootstrap-card';
const {unitConversions} = dataBlockCardExport

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
    expect(wrapper.find("Card > CardBlock > div").exists()).toBeTruthy()
    expect(wrapper.find("Card > CardBlock > div").children().length)
      .toBeGreaterThan(0)
  })
});

describe('unitConversions', function () {
  describe('lunation', function () {
    const {lunation} = unitConversions
    it('val maps to correct moon phase', function () {
      // multiples of 1/8
      expect(lunation(0)).toBe("New Moon")
      expect(lunation(0.125)).toBe("Waxing Crescent")
      expect(lunation(0.25)).toBe("1st Quarter")
      expect(lunation(0.375)).toBe("Waxing Gibbous")
      expect(lunation(0.5)).toBe("Full Moon")
      expect(lunation(0.625)).toBe("Waning Gibbious")
      expect(lunation(0.75)).toBe("3rd Quarter")
      expect(lunation(0.875)).toBe("Waning Crescent")

      // fractionals
      expect(lunation(0.5625 + 0.0001)).toBe("Waning Gibbious")
      expect(lunation(0.5625 - 0.0001)).toBe("Full Moon")
    });
  });
});
