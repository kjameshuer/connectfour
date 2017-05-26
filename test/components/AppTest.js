import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('<App />', function () {

  beforeEach(function () {
    this.component = shallow(<App />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "index"', function () {
      expect(this.component.hasClass('index')).to.equal(true);
    });

    // it('should have props for gameState and actions',function(){
    //   expect(this.component.props().gameState).to.be.defined;
    //    expect(this.component.props().actions).to.be.defined;
    // })

  });
});
