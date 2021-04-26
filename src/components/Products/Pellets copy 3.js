import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import axios from 'axios'

export default function Pellets({ navigation, data }) {

    // const today= new Date(data.current.dt*1000).toLocaleString("fr-FR", {day:"numeric", weekday:"long", month:"long", year:"numeric"});

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal={true}
                showHorinzontalIndicator={false}
            >
                <View style={styles.card}>
                    <Image
                        source={require('../../../assets/img/Pellets/MyPelletsBag.jpg')}
                        style={{ width: 100, height: 100 }}
                    />
                    {/* <Text style={styles.name}>{today}</Text> */}
                    <Text>{data.lat}</Text>
                    <Button 
                        style={styles.button}
                        title= "Voir le produit"
                        color= 'black'
                        onPress={() => navigation.navigate('Products')}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        padding: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'lightblue',
        marginLeft: 12,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
        shadowOpacity: 10,
    },
    name:{
        margin: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: 'lightcoral',
        color: 'white',
    }
})