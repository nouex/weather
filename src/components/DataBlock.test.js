import React from "react"
import { shallow } from 'enzyme';
import DataBlock from "./DataBlock"
import _DataBlockHeader from "../containers/DataBlockHeader"
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
      <div className="p-3">
        <_DataBlockHeader />
        { dataBlockCards }
      </div>
    )
  });
});
