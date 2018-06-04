import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from './Carousel';
import '../../../../tests/config/jest/enzymeSetup';

const slides = [{
  className: 'test-slide',
  top: 'Test',
  middle: 'Slide',
  bottom: 'Content',
  arcDetails: null
}]

describe('Carousel', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Carousel slides={slides} />);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  describe('when it receives no animation duration value', () => {
    it('should render slides with a default animation duration of 5.5s', () => {
      jest.useFakeTimers();
      const wrapper = mount(<Carousel slides={slides} />);
  
      expect(setInterval.mock.calls.length).toEqual(1);
      expect(setInterval.mock.calls[0][1]).toEqual(5500);
  
      jest.runOnlyPendingTimers();
      expect(wrapper.find('.slide').text()).toEqual('TestSlideContent');
      wrapper.unmount();
    });
  });

  describe('when it receives a specific animation duration value', () => {
    it('should render slides with the specified animation duration', () => {
      jest.useFakeTimers();
      const wrapper = mount(<Carousel slides={slides} slideDurationMs={10000} />);
  
      expect(setInterval.mock.calls.length).toEqual(1);
      expect(setInterval.mock.calls[0][1]).toEqual(10000);
      wrapper.unmount();
    });
  });

  describe('when unmounting', () => {
    it('should clean up pending animations', () => {
      jest.useFakeTimers();
      const mockTimerValue = 6000;
      setInterval.mockReturnValue(mockTimerValue);

      const wrapper = mount(<Carousel slides={slides} />);
      wrapper.unmount()

      expect(clearInterval.mock.calls.length).toEqual(1)
      expect(clearInterval.mock.calls[0][0]).toEqual(mockTimerValue)
    });
  });
});
