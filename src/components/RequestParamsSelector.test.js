'use strict';
import React from "react"
import {shallow} from "enzyme"
import Extend from './RequestParamsSelectors/Extend';
import Lang from './RequestParamsSelectors/Lang';
import Units from './RequestParamsSelectors/Units';
import RequestParamsSelector from './RequestParamsSelector';

describe('<RequestParamsSelector />', function () {
  it('structure looks like', function () {
    const props = {
      requestParams: {},
      setRequestParam: () => {}
    }
    const wrapper = shallow(<RequestParamsSelector {...props}/>),
          extendWrapper = wrapper.childAt(0),
          langWrapper = wrapper.childAt(1),
          unitsWrapper = wrapper.childAt(2)

    expect(extendWrapper.name()).toEqual("Extend")
    expect(extendWrapper.props()).toEqual({set: jasmine.any(Function)})
    expect(langWrapper.name()).toEqual("Lang")
    expect(langWrapper.props()).toEqual({set: jasmine.any(Function)})
    expect(unitsWrapper.name()).toEqual("Units")
    expect(unitsWrapper.props()).toEqual({set: jasmine.any(Function)})
  });
});
