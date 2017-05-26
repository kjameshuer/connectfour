import React from 'react';
import { shallow } from 'enzyme';
import Gameboard from 'components\Gameboard.js';

describe('<Gameboard />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Gameboard />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "gameboard-component"', function () {
      expect(component.hasClass('gameboard-component')).to.equal(true);
    });
  });
});
