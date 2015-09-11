/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var HomeMenu = require('./Views/HomeMenu.ios.js');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Component
} = React;

class Examples extends Component{
  render() {
    debugger;
    return (
      <NavigatorIOS initialRoute={{
        component: HomeMenu,
        title: 'Home Menu'
      }} style={{flex: 1}}/>
    );
  }
}

AppRegistry.registerComponent('Examples', () => Examples);
