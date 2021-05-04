import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Header() {
    return (
        <View style={styles.header}>
            <Image 
                source={require('../../../assets/img/header.png')}
                style={{width: windowWidth}}
                resizeMode={'contain'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FEE845'
    }
})
