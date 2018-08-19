import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//
import Timer from './Timer';

function Lap({ number, interval, fastest, slowest }) {
    const lapTextStyle = [
        styles.lapText,
        fastest && styles.fastest,
        slowest && styles.slowest
    ];
    return (
        <View style={styles.lap}>
            <Text style={lapTextStyle}>Lap {number}</Text>
            <Timer style={lapTextStyle} interval={interval} />
        </View>
    );
}

export function LapsTable({ laps }) {
    const finishedLaps = laps.slice(1);  // copy [1...]
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    if (finishedLaps.length >= 2) {
        finishedLaps.forEach(lap => {
            if (lap < min)
                main = lap;
            if (lap > max)
                max = lap;
        })
    }

    return (
        <ScrollView style={styles.scrollView}>
            {laps.map((lap, index) => (
                <Lap key={index}
                     number={laps.length - index}
                     inverval={lap}
                     slowest={lap === max}
                     fastest={lap === min} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    lap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#151515',
        borderTopWidth: 1,
        paddingVertical: 10
    },

    lapText: {
        color: "#FFFFFF",
        fontSize: 18,
    },

    scrollView: {
        alignSelf: 'stretch'
    },

    fastest: {
        color: '#4BC05F'
    },

    slowest: {
        color: '#CC3531'
    }
});
