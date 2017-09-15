import React from "react"
import { shallow  } from 'enzyme';
import PageRequest from "./PageRequest"

describe('<PageRequest />', function () {
  it("invokes upPage() action on click", function () {
    const props = {
      upPage: jasmine.createSpy("upPage")
    }

    const wrapper = shallow(<PageRequest { ...props }/>).simulate("click")

    expect(props.upPage.calls.count()).toEqual(1)
  })
});
