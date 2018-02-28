import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

describe('Pagination', () => {
  let component;
  let pageChangeSpy;
  let metadata;

  beforeEach(() => {
    pageChangeSpy = jest.fn();
    metadata = {
      count: 20,
      offset: 20,
      total: 60,
    };

    component = shallow(<Pagination metadata={metadata} onPageChange={pageChangeSpy} />)
  });

  it('should show disabled next page and disabled previous page buttons', () => {
    component.setProps({
      metadata: {
        count: 5,
        offset: 0,
        total: 5,
      }
    });

    expect(component.getElement()).toMatchSnapshot();
  });

  it('should show disabled next page and previous page buttons', () => {
    component.setProps({
      metadata: {
        count: 20,
        offset: 20,
        total: 40,
      }
    });

    expect(component.getElement()).toMatchSnapshot();
  });

  it('should show next page and disabled previous page buttons', () => {
    component.setProps({
      metadata: {
        count: 20,
        offset: 0,
        total: 40,
      }
    });

    expect(component.getElement()).toMatchSnapshot();
  });

  it('should show next page and previous page buttons', () => {
    component.setProps({
      metadata: {
        count: 20,
        offset: 20,
        total: 60,
      }
    });

    expect(component.getElement()).toMatchSnapshot();
  });

  describe('when the next page button is clicked', () => {
    describe('and the button is enabled', () => {
      it('should call the onPageChange prop', () => {
        component.find('.arrow--next').simulate('click');
        expect(pageChangeSpy).toHaveBeenCalledWith(40);
      });
    });

    describe('and the button is disabled', () => {
      it('should not call the onPageChange prop', () => {
        component.setProps({
          metadata: {
            count: 20,
            offset: 20,
            total: 40,
          }
        });
        component.find('.arrow--next').simulate('click');
        expect(pageChangeSpy).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('when the previous page button is clicked', () => {
    describe('and the button is enabled', () => {
      it('should call the onPageChange prop', () => {
        component.find('.arrow--previous').simulate('click');
        expect(pageChangeSpy).toHaveBeenCalledWith(0);
      });
    });

    describe('and the button is disabled', () => {
      it('should not call the onPageChange prop', () => {
        component.setProps({
          metadata: {
            count: 20,
            offset: 0,
            total: 40,
          }
        });
        component.find('.arrow--previous').simulate('click');
        expect(pageChangeSpy).toHaveBeenCalledTimes(0);
      });
    });
  });
});
