import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import axios from 'axios'

export default function Pellets({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal={true}
                showHorinzontalIndicator={false}
            >
                <View style={styles.card}>
                    <Image
                        source={require('../../../assets/img/Pellets/MyPelletsBag.jpg')}
                        style={{ width: 180, height: 180 }}
                    />
                    <Text style={styles.name}>My Pellets</Text>
                    <Text>4,80€</Text>
                    <Button 
                        style={styles.button}
                        title= "Voir le produit"
                        color= 'black'
                        onPress={() => navigation.navigate('Products')}
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../../../assets/img/Pellets/BarlinekBag.jpg')}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text style={styles.name}>Barlinek</Text>
                    <Text>4.50€</Text>
                    <Button 
                        style={styles.button}
                        title= "Voir"
                        color= 'black'
                    />
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('../../../assets/img/Pellets/FagnesPelletBucket.jpg')}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text style={styles.name}>Fagnes Pellets</Text>
                    <Text>2.90€</Text>
                    <Button 
                        style={styles.button}
                        title= "Voir"
                        color= 'black'
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