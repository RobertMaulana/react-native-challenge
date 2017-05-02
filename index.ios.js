/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, registerComponent} from 'react-native'
import App from './src/App'

export default class uberclone extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('uberclone', () => uberclone);
