import React from "react"
import { shallow  } from 'enzyme';
import PageRequest from "./PageRequest"

describe('<PageRequest />', function () {
  // FIXME:  TypeError: Cannot set property scrollHeight of [object Object] which has only a getter
  function simulateScrollBottom() {
    let sE =  document.scrollingElement || document.documentElement,
        prev = {
          scrollHeight: sE.scrollHeight,
          scrollTop: sE.scrollTop,
          innerHeight: window.innerHeight
        }

    sE.scrollHeight = 700 - 90 // offset of 90
    sE.scrollTop = 300
    window.innerHeight = 700
    document.dispatchEvent(document.createElement("UIEvent").initUIEvent())

    return function undoScrollBottom() {
        sE.scrollHeight = prev.scrollHeight
        sE.scrollTop   = prev.scrollTop
        window.innerHeight = prev.innerHeight
    }
  }

  xit("invokes upPage() action on scroll bottom", function () {
    const props = {
      upPage: jasmine.createSpy("upPage")
    }

    const wrapper = shallow(<PageRequest { ...props }/>)
    let undoScrollBottom = simulateScrollBottom()
    undoScrollBottom()
    expect(props.upPage.calls.count()).toEqual(1)
  })
});
