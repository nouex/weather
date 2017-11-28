'use strict';

import React from "react"
import {shallow} from "enzyme"
import Extend from "./Extend"

describe('<Extend />', function () {
  it('structure looks like', function () {
    const wrapper = shallow(<Extend set={() => {}}/>)
    expect(wrapper.childAt(0).name()).toBe("label")
    expect(wrapper.childAt(1).name()).toBe("input")
  });

  it('checkbox toggles set()', function () {
    const setSpy = jasmine.createSpy("setSpy")
    const wrapper = shallow(<Extend set={setSpy}/>)
    expect(setSpy.calls.any()).toBe(false)
    const checkboxWrapper = wrapper.find("input[type=\"checkbox\"]")
    expect(checkboxWrapper.exists()).toBe(true)
    checkboxWrapper.simulate("change", {currentTarget: {checked: false}})
    expect(setSpy.calls.argsFor(0)).toEqual([false])
    checkboxWrapper.simulate("change", {currentTarget: {checked: true}})
    expect(setSpy.calls.argsFor(1)).toEqual([true])
    checkboxWrapper.simulate("change", {currentTarget: {checked: false}})
    expect(setSpy.calls.argsFor(0)).toEqual([false])
    expect(setSpy.calls.count()).toEqual(3)
  });
});
