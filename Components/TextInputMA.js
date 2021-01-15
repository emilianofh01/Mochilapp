import React, {Component, createRef} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  findNodeHandle,
  Keyboard,
  Animated,
  StyleSheet,
} from 'react-native';

import DropShadow from 'react-native-drop-shadow';

class TextInputMA extends Component {
  state = {
    _thisRef: createRef(),
    focus: false,
    marginAnimation: new Animated.Value(0),
  };

  static current = null;

  static focusCurrent() {
    console.log(TextInputMA.current);
    if (TextInputMA.current != null) {
      TextInputMA.current.ti.measureLayout(
        findNodeHandle(TextInputMA.current.sv),
        (x, y, widht, height) => {
          // TextInputMA.current.sv.scrollTo({
          //   x: x,
          //   y: y,
          //   animated: true,
          // });
        },
      );
    }
  }

  focused = false;

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', TextInputMA.focusCurrent);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', TextInputMA.focusCurrent);
  }

  onFocus = () => {
    TextInputMA.current = {
      sv: this.props.scrollViewRef.current,
      ti: this.state._thisRef.current,
    };
    this.setState({focus: true});

    Animated.timing(this.state.marginAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start()
  };

  onBlur = () => {
    this.setState({focus: false});
    Animated.timing(this.state.marginAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start()
  };

  render() {
    console.log(this.props.type);
    return (
      <DropShadow
        style={{
          shadowColor: this.state.focus ? '#01BB6B' : 'white',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: this.state.focus ? 1 : 0.2,
          shadowRadius: this.state.focus ? 4 : 3,
        }}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              marginHorizontal: this.state.marginAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['10%', '8%'],
              }),
            },
          ]}>
          <TextInput
            ref={this.state._thisRef}
            onFocus={() => this.onFocus()}
            onBlur={this.onBlur}
            placeholder={this.props.placeholder}
            style={{
              fontSize: 15,
              fontFamily: 'Mulish-Bold',
              borderRadius: 5,
            }}
            secureTextEntry={this.props.type === 'password' ? true : false}
            blurOnSubmit={true}
            autoCompleteType={this.props.type}
            keyboardType={this.props.keyboardType}
          />
        </Animated.View>
      </DropShadow>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default TextInputMA;
