import React from "react"
import { shallow } from 'enzyme';
import DataPage from "./DataPage"
import _Header from "../containers/Header"
import _DataBlock from "../containers/DataBlock"
import _DataBlockSelector from "../containers/DataBlockSelector"
import _PageRequest from "../containers/PageRequest"

describe('<DataPage />', function () {
  it('in general, renders correctly', function () {
    const props = {
      "dataLen": 6,
      "page": 1,
      "pageInterval": 5
    }

    expect(shallow(<DataPage {...props}/>).getNode()).toEqual(
      <div>
        <_Header />
        <_DataBlockSelector />
        <_DataBlock />
        <_PageRequest />
      </div>
    )
  });

  describe('<PageRequest />', function () {
    it('renders when we have more data available', function () {
      const props = {
        "dataLen": 6,
        "page": 1,
        "pageInterval": 5
      }

      expect(shallow(<DataPage {...props}/>).getNode()).toEqual(
        <div>
          <_Header />
          <_DataBlockSelector />
          <_DataBlock />
          <_PageRequest />
        </div>
      )
    });

    it("does not render with deicit of data", function () {
      const props = {
        "dataLen": 4,
        "page": 1,
        "pageInterval": 5
      }

      expect(shallow(<DataPage {...props}/>).getNode()).toEqual(
        <div>
          <_Header />
          <_DataBlockSelector />
          <_DataBlock />
          { null }
        </div>
      )
    })
  });
});
