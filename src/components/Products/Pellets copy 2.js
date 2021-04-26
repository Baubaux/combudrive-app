import React from 'react'
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function PelletsCopy2({ navigation, data }) {
    console.log("data pellet copy 2 : " + data)
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
                    <Text>Titre: {data.name}</Text>
                    <Button 
                        style={styles.button}
                        title= "Voir le produit"
                        color= 'black'
                        onPress={() => navigation.navigate('Products')}
                    />
                </View>
                <View>
                    <FlatList 
                        data={data}
                        keyExtractor={(index, item) => {
                            console.log("index: ", index)
                            return index.toString();
                        }}
                        renderItem={({ item }) => {
                            console.log("item", item)
                            return (
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.unit_price}</Text>
                                </View>
                            )
                        }}
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
        height: 300,
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