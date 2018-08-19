import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import Timer from './Timer';
import RoundButton from './RoundButton';
import RowContainer from './RowContainer';
import { LapsTable } from './Lap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =
      {
        timer: 1234567,
        start: 0,
        now: 0,
        laps: []
      };
  }

  componentWillUnmount()
  {
    clearInterval(this.timer);
  }
    
  start() {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      laps: [0]
    });

    this.timer = setInterval(() => {
      this.setState(
        { now: new Date().getTime() }
      );
    }, 100);
  }

  lap() {
    const timestamp = new Date().getTime();
    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    });
  }

  stop() {
    clearInterval(this.timer);
    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    });
  }

  reset() {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    });
  }

  resume() {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
    });
    this.timer = setInterval(() => {
      this.setState(
        { now: new Date().getTime() }
      );
    }, 100);
  }

  render() {
    const { now, start, laps } = this.state;
    const timer = now - start;

    return (
      <View style={styles.container}>
        <Timer style={styles.timer}
          interval={laps.reduce((total, curr) => total + curr, 0) + timer} />
        {laps.length === 0 &&
          <RowContainer>
            <RoundButton title="Lap" color="#8B8B90" background="#151515"
              disabled />
            <RoundButton title="Start" color="#50D167" background="#1B361F"
              onPress={() => this.start()} />
          </RowContainer>
        }
        {start > 0 &&
          <RowContainer>
            <RoundButton title="Lap" color="#FFFFFF" background="#3D3D3D"
              onPress={() => this.lap()} />
            <RoundButton title="Stop" color="#E33935" background="#3C1715"
              onPress={() => this.stop()} />
          </RowContainer>
        }
        {laps.length > 0 && start === 0 &&
          <RowContainer>
            <RoundButton title="Reset" color="#FFFFFF" background="#3D3D3D"
              onPress={() => this.reset()} />
            <RoundButton title="Resume" color="#50D167" background="#1B361F"
              onPress={() => this.resume()} />
          </RowContainer>
        }
        <LapsTable laps={this.state.laps} timer={timer} />
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
    fontWeight: '200',
    width: 110
  },
});


