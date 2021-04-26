import React, {useState, useEffect} from 'react'
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Product({ navigation, data }) {
    console.log("la data de card : " + data)
    return (
    <FlatList
        data={data}
        keyExtractor={(index, item) => {
            console.log("index : ", index)
            return index.toString();
        }}
        renderItem={({ item }) => {
            console.log("item : ", item)
            return (
                <Text>PRODUIT : {item.name} <br/>DESCRIPTION : {item.description} <br/>PRIX : {item.unit_price} € </Text>
            )
        }}
        />
    )
}
const styles = StyleSheet.create({
    title: {
        color: "white",
        backgroundColor: "black",
        textTransform: 'uppercase'
    },
    description: {
    }
})