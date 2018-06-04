import React from 'react';
import { shallow, mount } from 'enzyme';
import Slide from './Slide';
import '../../../../tests/config/jest/enzymeSetup';

const slideData = {
  className: 'test-slide',
  top: 'Test',
  middle: 'Slide',
  bottom: 'Content',
  arcDetails: {
    color: '#f00',
    percentage: 75
  }
};
const slideDurationMs = 5500;

describe('Slide', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <Slide
        data={slideData}
        slideDurationMs={slideDurationMs}
      />
    );

    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  describe('when it does not receive details for rendering an arc', () => {
    it('should not render an arc', () => {
      const arclessSlideData = {
        arcDetails: null
      };
      
      const wrapper = mount(
        <Slide
          data={arclessSlideData}
          slideDurationMs={slideDurationMs}
        />
      );
  
      expect(wrapper.find('.arc').exists()).toBe(false);
      wrapper.unmount();
    });
  });

  describe('when it receives details for rendering an arc', () => {
    it('should render the given arc color and percentage', () => {
      const wrapper = mount(
        <Slide
          data={slideData}
          slideDurationMs={slideDurationMs}
        />
      );
      const arc = wrapper.find('.arc');
  
      expect(arc.prop('progressColor')).toEqual('#f00');
      expect(arc.prop('progress')).toEqual(75);
      wrapper.unmount();
    });

    // this can happen if the days until next report value is 31
    // (over the assumed max of 30)
    it('should render the arc with a maximum progress percentage of 100', () => {
      const superSlideData = {
        arcDetails: {
          percentage: 103
        }
      };

      const wrapper = mount(
        <Slide
          data={superSlideData}
          slideDurationMs={slideDurationMs}
        />
      );

      expect(wrapper.find('.arc').prop('progress')).toEqual(100);
      wrapper.unmount();
    });
  });
});
