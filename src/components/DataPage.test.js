import React from "react"
import { shallow } from 'enzyme';
import DataPage from "./DataPage"
import _Header from "../containers/Header"
import _DataBlock from "../containers/DataBlock"
import _PageRequest from "../containers/PageRequest"
import Controls from "./Controls"
import Footer from "./Footer"

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
        <Controls />
        <_DataBlock />
        <_PageRequest />
        <Footer />
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
          <Controls />
          <_DataBlock />
          <_PageRequest />
          <Footer />
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
          <Controls />
          <_DataBlock />
          { null }
          <Footer />
        </div>
      )
    })
  });
});
