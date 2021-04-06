import React, { Component } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default class Wood extends Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView 
                    horizontal={true}
                    showHorinzontalIndicator={false}
                >
                    <View style={styles.card}>
                        <Image
                            source={require('../../../assets/img/Wood/WoodBag.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Box 2m3 30cm</Text>
                        <Text>280€</Text>
                        <Button 
                            style={styles.button}
                            title= "Voir"
                            color= 'black'
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/img/Wood/WoodBox.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Box 2m3 45cm</Text>
                        <Text>320€</Text>
                        <Button 
                            style={styles.button}
                            title= "Voir"
                            color= 'black'
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/img/Wood/WoodenCoal.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Maxi Buches</Text>
                        <Text>4,50€</Text>
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
        backgroundColor: 'orange',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'orange',
        marginLeft: 30,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
        shadowOpacity: 10,
    },
    name:{
        margin: 10,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    wood: {
        height: 200,
        width: 120,
    }
})