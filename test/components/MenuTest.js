import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../src/components/Menu.js';

describe('<Menu />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Menu />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "menu-component"', function () {
      expect(component.hasClass('menu-component')).to.equal(true);
    });

  });
});
