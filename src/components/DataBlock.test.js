import React from "react"
import { shallow } from 'enzyme';
import DataBlock from "./DataBlock"
import _DataBlockHeader from "../containers/DataBlockHeader"
import _DataBlockDropdown from "../containers/DataBlockDropdown"
import _DataBlockCard from "../containers/DataBlockCard"

describe('<DataBlock />', function () {
  it('renders correctly', function () {
    const N = 8;
    const wrapper = shallow(<DataBlock dataLen={N} />);

    let dataBlockCards = new Array()
    for (var i = 0; i < N; i++) {
      dataBlockCards.push(<_DataBlockCard key={i} dataPtKey={i}/>)
    }

    expect(wrapper.getNode()).toEqual(
      <div>
        <_DataBlockDropdown />
        <_DataBlockHeader />
        { dataBlockCards }
      </div>
    )
  });
});
