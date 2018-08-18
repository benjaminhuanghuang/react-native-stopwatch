import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import moment from 'moment';


function Timer({ interval }) {
    const duration = moment.duration(interval);
    const centiseconds = Math.floor(duration.milliseconds() / 10)
    return (
        <Text style={styles.timer}>
            {duration.minutes()}:{duration.seconds()},{centiseconds}
        </Text>
    );   

}

const styles = StyleSheet.create({
    timer: {  
        color: '#FFFFFF', 
        fontSize: 76,
        fontWeight: '200'
    },
});


export default Timer;