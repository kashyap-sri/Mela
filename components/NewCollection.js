import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default () => (
    <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../assets/bg_6.png')} />
        <View style={styles.textContainer}>
            <Text style={styles.text1}>New</Text>
            <Text style={styles.text2}>Collection</Text>
        </View>
        <Image style={styles.sweatshirtImage} source={require('../assets/sweatshirt.jpg')} />
        <View style={styles.textContainer2}>
            <Text style={styles.text3}>SAVE UP TO</Text>
            <Text style={styles.text4}>45% OFF</Text>
        </View>
    </View>
);

const styles = StyleSheet.create(
    {
        container: {
            marginTop: 25,
            position: 'relative'
        },
        backgroundImage: {
            width: '100%',
            height: 360,
        },
        text1: {
            fontSize: 25,
            position: 'absolute'
        },
        text2: {
            fontSize: 25,
            top: 20
        },
        text3: {
            color: 'white',
            fontSize: 20,
        },
        text4: {
            color: 'white',
            fontSize: 20,
        },
        textContainer: {
            position: 'absolute',
            left: 150,
            top: 20
        },
        textContainer2: {
            position: 'absolute',
            right: 20,
            bottom: 10,
        },
        sweatshirtImage: {
            width: 200,
            height: 200,
            position: 'absolute',
            top: 100,
            left: 20
        }
    }
);