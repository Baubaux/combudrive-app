import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Contact() {
    return (
        <View style={styles.header}>
            <Text style={styles.header}>Nous contacter :</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'green',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
    }
})
