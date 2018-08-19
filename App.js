import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import Timer from './Timer';
import RoundButton from './RoundButton';
import RowContainer from './RowContainer';
import { LapsTable } from './Lap';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = 
      {
        timer: 1234567,
        laps:[12345, 3456,4577,1111]
      };
  } 
  
  render() {
    return (
      <View style={styles.container}>
        <Timer style={styles.timer} interval={this.state.timer} />
        <RowContainer>
          <RoundButton title="Reset" color="#FFFFFF" background="#3D3D3D" />
          <RoundButton title="Start" color="#50D167" background="#1B361F" />
        </RowContainer>
        <LapsTable laps={this.state.laps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },

  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200'
  },
});


