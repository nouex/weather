import React from "react"
import { shallow } from 'enzyme';
import DataBlock from "./DataBlock"
import _DataBlockHeader from "../containers/DataBlockHeader"
import _DataBlockCard from "../containers/DataBlockCard"

describe('<DataBlock />', function () {
  it('in general, renders correctly', function () {
    const props = {
      dataLen: 4,
      pageInterval: 5,
      page: 1
    }
    const wrapper = shallow(<DataBlock {...props} />);

    let dataBlockCards = new Array()
    for (var i = 0; i < props.dataLen; i++) {
      dataBlockCards.push(<_DataBlockCard key={i} dataPtKey={i}/>)
    }

    expect(wrapper.getNode()).toEqual(
      <div className="p-3">
        <_DataBlockHeader />
        { dataBlockCards }
      </div>
    )
  });

  it("paginates", function () {
    const initProps = {
      dataLen: 6,
      pageInterval: 5,
      page: 1
    }

    const wrapper = shallow(<DataBlock { ...initProps } />);

    expect(wrapper.find(_DataBlockCard).length).toEqual(5)
    wrapper.setProps({page: 2})
    expect(wrapper.find(_DataBlockCard).length).toEqual(6)
    wrapper.setProps({page: 3})
    expect(wrapper.find(_DataBlockCard).length).toEqual(6)
  })
});
