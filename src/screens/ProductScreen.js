import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function ProductScreen({route, navigation}) {
    const item = route.params;
    console.log("l'item: ", item)
    console.log(item.name)

    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}
