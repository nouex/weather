import React from "react"
import { shallow, mount  } from 'enzyme';
import DataBlockDropdown from "./DataBlockDropdown"

describe('<DataBlockDropdown />', function () {
  it('renders correctly', function () {
    const wrapper = shallow(
      <DataBlockDropdown setDataBlockName={() => {}}/>
    )

    expect(wrapper.getNode()).toEqual(
      <select value="hourly" onChange={jasmine.any(Function)}>
        <option value="minutely">Minutely</option>
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
      </select>
    )
  });

  it("fires setDataBlockName action on onChange", function () {
      const spy = jasmine.createSpy("setDataBlockName")
      const wrapper = mount(
        <DataBlockDropdown setDataBlockName={spy}/>
      )

      expect(wrapper.state("value")).toEqual("hourly")
      wrapper.simulate("change", {target: {value: "daily"}})
      expect(wrapper.state("value")).toEqual("daily")
      expect(spy).toHaveBeenCalledWith("daily")
      expect(spy.calls.count()).toEqual(1)
  })

});