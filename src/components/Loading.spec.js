import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('Loading', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Loading />);
  });

  it('should show loader', () => {
    expect(component.getElement()).toMatchSnapshot();
  });
});
