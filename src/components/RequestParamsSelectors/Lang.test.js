'use strict';

import React from "react"
import {shallow} from "enzyme"
import Lang from "./Lang"

describe('<Lang />', function () {
  it('structure looks like', function () {
    let selectWrapper, selectChildrenWrapper
    const wrapper = shallow(<Lang set={() => {}}/>)
    expect(wrapper.childAt(0).name()).toBe("label")
    expect((selectWrapper = wrapper.childAt(1)).name()).toBe("select")
    expect((selectChildrenWrapper = selectWrapper.children()).length).toEqual(9)
    selectChildrenWrapper.forEach((childWrapper) => {
      expect(childWrapper.name()).toBe("option")
    });
  });

  it('select #change updates the selected val', function () {
    const setSpy = jasmine.createSpy("setSpy")
    const selectWrapper = shallow(<Lang set={setSpy}/>).find("select")
    const onChange = selectWrapper.prop("onChange")
    const target = [{value: "foo"}, {value: "bar"}]
    target.selectedIndex = 1
    expect(setSpy.calls.any()).toBe(false)
    onChange({ target })
    expect(setSpy).toHaveBeenCalledWith("bar")
  });
});
