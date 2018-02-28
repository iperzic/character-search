import React from 'react';
import { shallow } from 'enzyme';

import TitleBar from './TitleBar';

describe('TitleBar', () => {
  let component;
  let text;

  beforeEach(() => {
    text = 'some text';
    component = shallow(<TitleBar text={text} />);
  });

  it('should show provided text', () => {
    expect(component.getElement()).toMatchSnapshot();
  });
});
