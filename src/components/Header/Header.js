import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View>
            <Image 
                source={require('../../../assets/img/header.png')}
                style={{width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
