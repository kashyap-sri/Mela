import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
    <View style={styles.header}>
        <View style={styles.screenActions}>
            <View style={[styles.actionItem]}></View>
            <View style={[styles.actionItem, styles.circle]}></View>
            <View style={[styles.actionItem, styles.triangle]}></View>
        </View>
        <View></View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        height: 24,
        width: '100%'
    },
    screenActions: {
        position: 'absolute',
        right: 0,
        width: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    actionItem: {
        width: 10,
        height: 10,
        backgroundColor: '#61151b39'
    },
    circle: {
        borderRadius: 10/2
    },
    triangle: {
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#61151b39',
    },
});
