import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import TextInputMA from './TextInputMA';
import Tent from './Tent';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Animated,
  Keyboard,
} from 'react-native';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

class Login extends Component {
  state = {
    switchAnimation: new Animated.Value(0),
    tentAnimation: new Animated.Value(0),
    scrollViewRef: React.createRef(),
    scrollViewFormRef: React.createRef(),
    scrollViewFormPos: 0,

    switchState: false,
    onInput: false,
    scrollEnabled: true,
  };

  componentWillUnmount() {
    Keyboard.removeAllListeners('keyboardWillShow');
    Keyboard.removeAllListeners('keyboardDidHide');
  }

  changeStateOfScroll = () => {
    !this.state.scrollEnabled
      ? this.setState({scrollEnabled: true})
      : this.setState({scrollEnabled: false});
  };

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', () => {
      this.tentAnimation(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      this.tentAnimation(false);
    });
  }

  switchAnimation = (button = undefined, before = false) => {
    const {switchAnimation, switchState, scrollViewFormRef} = this.state;

    if (button != switchState && button != undefined || before === false) {

      if(before === false) {
        !switchState 
        ? scrollViewFormRef.current.scrollTo({x: widthWindow, animated: true})
        : scrollViewFormRef.current.scrollTo({x: 0, animated:true});
      }
      
    }
  };

  tentAnimation = (show) => {
    Animated.timing(this.state.tentAnimation, {
      toValue: show ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  handleScroll = (event) => {
    const scrollPosition = (event.nativeEvent.contentOffset.x / widthWindow) * 100;
    

    if(scrollPosition > 80) {
      this.switchAnimation(true, true)
      

      this.setState({switchState: false});
    } else if(scrollPosition <= 30) {
      this.switchAnimation(true, true);
     

      this.setState({switchState: false});
    }
    // scrollPosition > 80 
    //   ? this.switchAnimation(true, true)
    //     : this.switchAnimation(false, true)

  }

  render() {
    const {scrollViewRef, switchAnimation, switchState} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={this.state.scrollViewRef}>
          <StatusBar backgroundColor={'#F2F2F2'} barStyle={'dark-content'} />
          <Animated.View
            style={[
              styles.header,
              {
                height: this.state.tentAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [heightWindow * 0.45, heightWindow * 0.2475],
                }),
              },
            ]}>
            <Animated.View
              style={{
                height: this.state.tentAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['55%', '100%'],
                }),
                width: '80%',
              }}>
              <Text adjustsFontSizeToFit style={styles.title}>
                {'Inicia tu aventura con '}
                <Text style={styles.textStrong}>Mochilapp</Text>
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: this.state.tentAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
                height: '45%',
              }}>
              <Tent />
            </Animated.View>
          </Animated.View>

          <View style={styles.optionsContainer}>
            <View
              style={{
                //   backgroundColor: 'red',
                marginHorizontal: '16.5%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'relative',
              }}>
              <Animated.View
                style={[
                  styles.animatedView,
                  {
                    left: switchAnimation.interpolate({
                      inputRange: [0, 55],
                      outputRange: ['0%', '55%'],
                    }),
                  },
                ]}
              />
              <TouchableWithoutFeedback
                onPress={() => this.switchAnimation(false)}>
                <View style={styles.loginButtonsContainer}>
                  <Text
                    adjustsFontSizeToFit
                    style={[
                      styles.loginButtons,
                      switchState || styles.activeButton,
                    ]}>
                    Iniciar sesión
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.switchAnimation(true)}>
                <View style={styles.loginButtonsContainer}>
                  <Text
                    style={[
                      styles.loginButtons,
                      !switchState || styles.activeButton,
                    ]}>
                    Regístrate
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={this.state.scrollEnabled}
            onScroll={this.handleScroll}
            ref={this.state.scrollViewFormRef}>
            <View
              style={{
                // marginHorizontal: '10%',
                marginVertical: 15,
                width: widthWindow,
              }}>
              <TextInputMA
                keyboardType={'email-address'}
                type={'email'}
                placeholder={'Correo electronico'}
                scrollViewRef={scrollViewRef}
                scrollState={this.changeStateOfScroll}
              />
              <TextInputMA
                type={'password'}
                placeholder={'Contraseña'}
                scrollViewRef={scrollViewRef}
                scrollState={this.changeStateOfScroll}
              />
            </View>
            <View
              style={{
                // marginHorizontal: '10%',
                marginVertical: 15,
                width: widthWindow,
              }}>
              <TextInputMA
                keyboardType={'email-address'}
                type={'email'}
                placeholder={'Screen 2'}
                scrollViewRef={scrollViewRef}
                scrollState={this.changeStateOfScroll}
              />
              <TextInputMA
                type={'password'}
                placeholder={'Screen 2'}
                scrollViewRef={scrollViewRef}
                scrollState={this.changeStateOfScroll}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
  },
  title: {
    marginHorizontal: 29,
    marginTop: 0,
    fontFamily: 'Mulish-Regular',
    fontSize: 45,
    zIndex: 1,
    color: '#333232',
  },
  header: {
    position: 'relative',
    // backgroundColor: 'red', //Prueba
  },
  textStrong: {
    fontFamily: 'Mulish-Bold',
    // backgroundColor:"#333232"
  },
  optionsContainer: {
    marginTop: 12,
    height: heightWindow * 0.05,
  },
  loginButtonsContainer: {
    width: (125 / 411) * widthWindow,
    height: (39 / 823) * heightWindow,
    display: 'flex',
    // padding: "2.5%",
  },
  loginButtons: {
    width: '100%',
    height: '100%',
    fontFamily: 'Mulish-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    color: '#9E9E9E',
  },
  activeButton: {
    color: 'white',
  },
  animatedView: {
    position: 'absolute',
    backgroundColor: '#01BB6B',
    width: '45%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Login;
