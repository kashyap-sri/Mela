import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default () => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>BRANDS TO CRUSH ON</Text>
            <Text style={styles.text2}>Shop our most-loved brands!</Text>
        </View>
        <View style={styles.brandCardContainer}>
            <View>
                <View style={styles.brandCard}>
                    <Image style={styles.brandImage} source={require('../assets/tommy_hilfiger.png')}/>
                </View>
                <Text style={styles.brandName}>Tommy Hilfiger</Text>
            </View>
            <View>
                <View style={styles.brandCard}>
                    <Image style={styles.brandImage} source={require('../assets/nike.png')}/>
                </View>
                <Text style={styles.brandName}>Nike</Text>
            </View>
            <View>
                <View style={styles.brandCard}>
                    <Image style={styles.brandImage} source={require('../assets/american_eagle.png')}/>
                </View>
                <Text style={styles.brandName}>American Eagle</Text>
            </View>
            <View>
                <View style={styles.brandCard}>
                    <Image style={styles.brandImage} source={require('../assets/adidas.png')}/>
                </View>
                <Text style={styles.brandName}>Adidas</Text>
            </View>
            <View>
                <View style={styles.brandCard}>
                    <Image style={styles.brandImage} source={require('../assets/puma.png')}/>
                </View>
                <Text style={styles.brandName}>Puma</Text>
            </View>
            <View>
                <View style={styles.brandCard}>
                    <Image style={styles.brandImage} source={require('../assets/zara.png')}/>
                </View>
                <Text style={styles.brandName}>Zara</Text>
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
        brandCard: {
            marginTop: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            borderRadius: 10,
            borderBottomWidth: 2,
            position: 'relative',
            margin: 15
        },
        brandImage: {
            display: 'flex',
            justifyContent: 'center'
        },
        brandName: {
            fontSize: 15,
            color: '#040e35',
            textAlign: 'center'
        },
        brandCardContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: 10
        }
    }
);