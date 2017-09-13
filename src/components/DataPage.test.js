import React from "react"
import { shallow } from 'enzyme';
import DataPage from "./DataPage"
import _Header from "../containers/Header"
import _DataBlock from "../containers/DataBlock"


describe('<DataPage />', function () {
  it('renders correctly', function () {
    expect(shallow(<DataPage />).getNode()).toEqual(
      <div>
        <_Header />
        <_DataBlock />
      </div>
    )
  });
});
