'use strict';
import React from "react"
import {shallow, mount} from "enzyme"
import Refresh from "./Refresh"

const noop = () => {}

describe('<Refresh />', function () {
  describe('handleClick()', function () {
    it('invokes loadJsonApi()', function () {
      const loadJsonApi = jasmine.createSpy("loadJsonApi")
      const wrapper = shallow(<Refresh loadJsonApi={loadJsonApi}/>)
      expect(loadJsonApi.calls.count()).toEqual(0)
      wrapper.simulate("click")
      expect(loadJsonApi.calls.count()).toEqual(1)
    });

    it('sets `state.isLoading` to true', function () {
      const wrapper = shallow(<Refresh loadJsonApi={noop}/>)
      expect(wrapper.state("isLoading")).toBe(false)
      wrapper.simulate("click")
      expect(wrapper.state("isLoading")).toBe(true)
    });
  });

  describe('handleMouseDown()', function () {
    function documentDispatchMouseup() {
      let ev = document.createEvent("MouseEvent")
      ev.
        initMouseEvent("mouseup", true, true, window, 0, 0, 0, 80, 20, false,
                        false, false, false, 0, null )
      document.dispatchEvent(ev)
    }

    it('sets `state.active` to true', function () {
      const wrapper = shallow(<Refresh loadJsonApi={noop}/>)
      expect(wrapper.state("active")).toBe(false)
      wrapper.simulate("mousedown")
      expect(wrapper.state("active")).toBe(true)
    });

    // meta test in preparation for next spec
    it('document.emit("mouseup")', function () {
      // NOTE: initMouseEvent() and createEvent(),  deprecated according to mdn
      // TIL: shallow(<Comp />).simulate("click") invokes Comp.onClick, it does
      // not fire the actual DOM event
      // TIL: jquery trigger() only fires listeners attached via $().on()
      const mouseUpSpy = jasmine.createSpy("mouseUpSpy")
      document.addEventListener("mouseup", mouseUpSpy)
      documentDispatchMouseup()
      expect(mouseUpSpy).toHaveBeenCalled()
    });

    it('document#mouseup adds and removes listener', function () {
      // monkey patch document.removeEventListener/addEventListener
      spyOn(window.document, "addEventListener").and.callThrough()
      spyOn(window.document, "removeEventListener").and.callThrough()
      const rEL = window.document.removeEventListener,
            aEL = window.document.addEventListener
      expect(aEL.calls.count()).toEqual(0)
      expect(rEL.calls.count()).toEqual(0)
      shallow(<Refresh loadJsonApi={noop}/>).simulate("mousedown")
      expect(aEL.calls.count()).toEqual(1)
      expect(rEL.calls.count()).toEqual(0)
      documentDispatchMouseup()
      expect(aEL.calls.count()).toEqual(1)
      expect(rEL.calls.count()).toEqual(1)
    });

    it('document#mouseup listener sets `state.active` false', function () {
      const wrapper = shallow(<Refresh loadJsonApi={noop}/>)
      expect(wrapper.state("active")).toBe(false)
      wrapper.simulate("mousedown")
      expect(wrapper.state("active")).toBe(true)
      documentDispatchMouseup()
      expect(wrapper.state("active")).toBe(false)
    });
  });
});
