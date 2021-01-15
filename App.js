import React, {Component, Fragment} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Card from './Components/Card';
import DropShadow from 'react-native-drop-shadow';
import Login from './Components/Login'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Dimensions,
  FlatList,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    

    return (
      <View>
        
        {!this.state.isLoggedIn ? <Login/> : ""}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default App;
