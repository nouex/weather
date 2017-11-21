import React from "react"
import { shallow  } from 'enzyme';
import DataBlockHeader from "./DataBlockHeader"

describe('<DataBlockHeader />', function () {
  it("renders correctly", function () {
    const props = {
      summary: "Rain for the hour.",
      icon: "sunny"
    }
    const wrapper = shallow(<DataBlockHeader {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <div>
          <p>{props.summary}</p>
      </div>
    )
  })
});
