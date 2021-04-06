import React, { Component } from 'react'
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default class CleaningProducts extends Component {
    render() {

        let dimensions = Dimensions.get("window");
        let imageHeight = Math.round((dimensions.width * 9) / 16);
        let imageWidth = dimensions.width;

        return (
            <View style={styles.container}>
                <ScrollView 
                    horizontal={true}
                    showHorinzontalIndicator={false}
                >
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/img/CleaningProducts/PelletA9.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Pellet A9</Text>
                        <Text>18.00€</Text>
                        <Button 
                            title="Voir le produit"
                            color="#F54E69"
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/img/CleaningProducts/BistreA9.jpg')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Bistre A9</Text>
                        <Text>19.00€</Text>
                        <Button 
                            title="Voir le produit"
                            color="#F54E69"
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={require('../../../assets/img/CleaningProducts/InsertA9.png')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.name}>Insert A9</Text>
                        <Text>25.00€</Text>
                        <Button 
                            title="Voir le produit"
                            color="#F54E69"
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    card: {
        padding: 10,
        backgroundColor: 'lightpink',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'lightpink',
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

})