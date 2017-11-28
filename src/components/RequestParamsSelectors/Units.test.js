'use strict';

import React from "react"
import {shallow} from "enzyme"
import Units from "./Units"

describe('<Units />', function () {
  it('structure looks like', function () {
    const wrapper = shallow(<Units set={() => {}} />)
    expect(wrapper.childAt(0).name()).toBe("label")
    expect(wrapper.childAt(1).name()).toBe("select")
    wrapper.childAt(1).children().forEach((childWrapper) => {
      expect(childWrapper.name()).toBe("option")
    });
  });

  it('select #change updates the selected val', function () {
    const setSpy = jasmine.createSpy("setSpy")
    const selectWrapper = shallow(<Units set={setSpy}/>).find("select")
    const onChange = selectWrapper.prop("onChange")
    const target = [{value: "foo"}, {value: "bar"}]
    target.selectedIndex = 1
    expect(setSpy.calls.any()).toBe(false)
    onChange({ target })
    expect(setSpy).toHaveBeenCalledWith("bar")
  });
});
