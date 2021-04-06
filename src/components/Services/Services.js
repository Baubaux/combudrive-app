import React, { Component } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default class Services extends Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showHorinzontalIndicator={false}
                >
                    <View style={styles.card}>
                        <Image
                            source={require('../../../assets/img/Services/Sweeping.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Ramonage</Text>
                        <Text>150.00€</Text>
                        <Button 
                            style={styles.button}
                            title= "Voir"
                            color= 'black'
                        />
                    </View>
                    <View style={styles.card}>
                        <Image
                            source={require('../../../assets/img/Services/StockCard.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Stockage</Text>
                        <Text>5.00€ + prix de la palette</Text>
                        <Button 
                            style={styles.button}
                            title= "Voir"
                            color= 'black'
                        />
                    </View>
                    <View style={styles.card}>
                        <Image
                            source={require('../../../assets/img/Services/DeliveryTruck.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Livraison</Text>
                        <Text>30.00€</Text>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    card: {
        padding: 10,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'lightgreen',
        marginLeft: 30,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
        shadowOpacity: 10,
    },
    name:{
        margin: 10,
        fontSize: 20,
        textTransform: 'uppercase',
        padding: 5,
        borderWidth: 1,
        borderLeftWidth: 5,
    },
})