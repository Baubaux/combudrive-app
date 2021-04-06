import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Location() {
    return (
        <View style={styles.header}>
            <Text style={styles.header}>Nous situer</Text>
            <Image source={require('../../../assets/img/map-combudrive.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
    }
})
