import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function RoundButton({ title, color, background }) {
    return (
        <View style={[styles.roundButton, { backgroundColor: background }]}>
            <View style={styles.buttonBorder}>
                <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    roundButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonTitle: {
        fontSize: 18,
        fontWeight: '500'
    }
});

export default RoundButton;