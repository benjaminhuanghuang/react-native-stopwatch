import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function RoundButton({ title, color, background }) {
    return (
        <View>
            <Text style={{ color }}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    timer: {
        color: '#FFFFFF',
        fontSize: 76,
        fontWeight: '200'
    },
});


export default RoundButton;