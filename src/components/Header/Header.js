import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Image 
                source={require('../../../assets/img/header.png')}
                style={{ width: '100%', height: 80 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#FEE845',
        height: 80,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
    }
})
