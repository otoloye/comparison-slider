import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Platform,
  ScrollView
} from 'react-native';
import Compare, { Before, After, DefaultDragger, Dragger } from './Comparison';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true
    };
  }

  onMoveStart() {
    this.setState({ scrollEnabled: false });
  }

  onMoveEnd() {
    this.setState({ scrollEnabled: true });
  }

  render() {
    return (
      <View style={{ marginTop: 90 }}>
        <Compare
          initial={deviceWidth / 2}
          draggerWidth={50}
          height={deviceHeight}
        >
          <Before>
            <Image
              source={require('./src/images/before.png')}
              style={{ width: deviceWidth, height: deviceHeight / 2 }}
            />
          </Before>
          <After>
            <Image
              source={require('./src/images/after.png')}
              style={{ width: deviceWidth, height: deviceHeight / 2 }}
            />
          </After>
          <Dragger>
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 24,
                bottom: 0,
                left: 24,
                backgroundColor: '#fff',
                opacity: 0.6
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: (deviceHeight - 90) / 2,
                left: 10,
                backgroundColor: '#fff',
                opacity: 0.9,
                width: 30,
                height: 30,
                marginTop: -15,
                transform: [{ rotate: '45deg' }]
              }}
            />
          </Dragger>
        </Compare>
      </View>
    );
  }
}
