import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sumCounter } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatchCounter } = this.props;
    dispatchCounter();
  }
  
  render() {
    const { name, counter } = this.props;
    return (
      <div>
        <h1>{ name }</h1>
        <button onClick={ this.handleClick }>{ counter }</button>
      </div>
    );
  }
}

Header.propTypes = {

};

const mapStateToProps = (stateStore) => ({
  name: stateStore.reducerOne.name,
  counter: stateStore.reducerTwo.counter,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCounter: () => dispatch(sumCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
