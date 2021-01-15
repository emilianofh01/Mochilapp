import React, {Component} from 'react';
import DropShadow from 'react-native-drop-shadow';

import {View, StyleSheet, Text,Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image'

const windowWidth = Dimensions.get('window').width;

class Card extends Component {
  state = {
    loaded: false,
  };

  isLoaded = () => {
    setTimeout(() => {
      this.setState({loaded: true});
    }, 1000);
    console.log(`Esperando ${this.props.data.id}`);
  };

  render() {
    const {name, status, species, image} = this.props.data;
    // console.log(`Esperando ${this.props.data.id}`)

    return (
      <View style={styles.container}>
        <DropShadow
          style={DropShadowStyle}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
                <FastImage
                  style={styles.imageContainer}
                  source={{uri: image, priority: FastImage.priority.normal}}
                  resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.statusContainer}>
                <View style={[styles.statusIndicator, status === "Alive" ? styles.statusIndicatorAlive : styles.statusIndicatorDied]}></View>
                <Text style={styles.status}>
                  {status} / {species}
                </Text>
              </View>
            </View>
          </View>
        </DropShadow>
      </View>
    );
  }
}

const DropShadowStyle = {
  flex: 1,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    shadowColor: '#000',
    flex:1,
    maxHeight: "50%",
  },
  imageContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
      // minHeight:300
  },
  card: {
    width: "100%",
    minHeight: "100%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  name: {
    fontSize: 35,
    fontFamily: 'Mulish',
    fontWeight: '100',
  },
  dataContainer: {
    padding: 20,
    paddingTop: 5,
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 15,
    height: 15,
    borderRadius: 100,
    marginRight: 5,
  },

  statusIndicatorAlive: {
    backgroundColor: 'green',
  },

  statusIndicatorDied: {
    backgroundColor: 'red',
  },

  status: {
    fontSize: 20,
  },
});

export default Card;
