import React from 'react';
import { shallow, mount } from 'enzyme';
import Gameboard from '../../src/components/Gameboard.js';

describe('<Gameboard />', function () {

  let component;
 

  describe('when rendering the component', function () {
    
    it('should have a className of "gameboard-component"', function () {
     component = shallow(<Gameboard />);
      expect(component.hasClass('gameboard-component')).to.equal(true);
    });

    it('should show the correct number of cells given an array',function(){
      component = mount(<Gameboard gameState={{ currentState:'Play', gameBoardArray:[[['_'],['_']],[['_'],['_']],[['_'],['_']]]}}/>);
    
      expect(component.children('.grid-row')).to.have.length(0)
    })

  });
});

