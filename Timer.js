import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import moment from 'moment';


function Timer({ interval, style }) {
    const duration = moment.duration(interval);
    const centiseconds = Math.floor(duration.milliseconds() / 10)
    return (
        <Text style={style}>
            {duration.minutes()}:{duration.seconds()},{centiseconds}
        </Text>
    );

}

export default Timer;