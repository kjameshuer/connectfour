
import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actors from '../actions/gameState';
import Main from '../components/App';

class App extends Component {

  render() {

    const {actions, gameState} = this.props;
    return <Main actions={actions} gameState={gameState}/>;
  }
}

App.propTypes = {
  actions: PropTypes.shape({ gameState: PropTypes.func.isRequired }),
  gameState: PropTypes.shape({})
};
function mapStateToProps(state) {

  const props = { gameState: state.gameState };
  return props;
}
function mapDispatchToProps(dispatch) {


  return {
    actions: bindActionCreators(actors, dispatch)
  };

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
