import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default () => (
    <View style={styles.container}>
        <Icon style={[styles.arrow]} name="arrow-left" size={40} color="#040e35" />
        <Text style={[styles.text]}>Sweatshirt Store</Text>
        <Icon style={[styles.bag]}name="shopping-bag" size={25} color="#040e35" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },
    arrow: {
        top: 10,
        position: 'absolute',
        left: 10
    },
    text: {
        fontSize: 20,
        textAlignVertical: 'center',
        position: 'absolute',
        left: 75,
        top: 15
    },
    bag: {
        position: 'absolute',
        right: 10,
        top: 15
    }
});
