import React, {Component} from 'react';
import Home from './Home';
import DetailCollection from './DetailCollection'
import {
  StackNavigator
} from 'react-navigation'

const Wrapper = StackNavigator({
  Main: {screen: Home},
  Detail: {screen: DetailCollection}
})
export default Wrapper
