import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import Timer from './Timer';
// import RoundButton from './RoundButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={1111} />
        {/* <RoundButton title="Start" color="#50D167" background="#1B361F"/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', 
    alignItems: 'center',
    paddingTop:130
  },
});


