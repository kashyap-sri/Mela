import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import BrandItem from './BrandItem';

const brandData = [
    {
        name: 'Tommy Hilfiger',
        asset: 'tommy_hilfiger.png'
    },
    {
        name: 'Nike',
        asset: 'nike.png'
    },
    {
        name: 'Amercan Eagle',
        asset: 'american_eagle.png'
    },
    {
        name: 'Adidas',
        asset: 'adidas.png'
    },
    {
        name: 'Puma',
        asset: 'puma.png'
    },
    {
        name: 'Zara',
        asset: 'zara.png'
    },
];


export default () => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>FOR ALL GENDERS</Text>
            <Text style={styles.text2}>Shop our most-loved brands!</Text>
        </View>
        <View style={styles.genderContainer}>
            <View>
                <View style={styles.genderCard}>
                    <Image style={styles.genderImage} source={require('../assets/men.png')}/>
                </View>
                <View style={styles.genderTextContainer}>
                    <Text style={styles.genderText}>Men</Text>
                </View>
            </View>
            <View>
                <View style={styles.genderCard}>
                    <Image style={styles.genderImage} source={require('../assets/women.png')}/>
                </View>
                <View style={styles.genderTextContainer}>
                    <Text style={styles.genderText}>Women</Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create(
    {
        container: {
            marginTop: 25,
            position: 'relative'
        },
        text1: {
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 10,
            color: '#040e35'
        },
        text2: {
            fontSize: 15,
            paddingLeft: 10,
            color: '#8f9bb3'
        },
        genderContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center"
        },
        genderCard: {
            margin: 20
        },
        genderText: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            borderRadius: 10,
            borderBottomColor: '#8f9bb3'
        },
        genderTextContainer: {
            borderBottomWidth: 1,
            borderRadius: 25,
            borderColor: '#8f9bb3',
        }
    }
);