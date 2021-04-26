import React, {useState, useEffect} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import axios from 'axios';

import Header from '../components/Header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Testscreen({navigation}) {

    const [typeProducts, setTypeProducts] = useState([
        {
            id:0,
            type: "Pellets",
            description: "Tout nos granulés de bois",
            picture: "https://www.combudrive.fr/medias/images/service-carte-de-stockage.jpg?fx=r_1170_600",
            bgColor: "lightblue"
        },
        {
            id:1,
            type: "Bois",
            description: "Tout notre bois de chauffage",
            picture: "https://www.combudrive.fr/medias/images/diaporama-livraison-a-domicile-1.jpg",
            bgColor: "lightyellow"
        },
        {
            id:2,
            type: "Charbon",
            description: "Tout nos charbons",
            picture: "https://www.combudrive.fr/medias/images/ramonage-2-.jpg?fx=r_1170_600",
            bgColor: "lightgray"
        },
        {
            id:3,
            type: "Entretien",
            description: "Tout nos produits d'entretiens",
            picture: "https://www.combudrive.fr/medias/images/zone-de-livraison-2.jpg",
            bgColor: "lightpink"
        }
    ]);

    // Render

    function renderTypeProducts(item, index) {
        return (
            <TouchableOpacity
                style={{height: 150, width: 150, justifyContent: 'center', marginHorizontal: 1}}
            >

                <Text>{item.type}</Text>
            
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginTop: 5,
                        borderRadius: 10,
                        marginRight: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 20,
                        backgroundColor: item.bgColor
                    }}
                >

                <View style={{ height: '35%', justifyContent: 'space-between'}}>
                    <Text>{item.description}</Text>
                    <Image 
                        source={item.picture}
                        resizeMode="cover"
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: "120%",
                            width: "100%",
                            height: "100%",
    
                        }}
                    />
                </View>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {/* Categories */}
            <View>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={typeProducts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item, index}) => renderTypeProducts(item, index)}
                />
            </View>
            {/* Products */}
            <View
                style={{
                    flex: 1,
                    marginTop: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "white"
                }}
            >

            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        margin: 20,
        height: 30,
        textTransform: 'uppercase',
        color: 'white',
        backgroundColor: 'lightpink',
    },
    card: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "lightcoral",
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    cardTitle: {
        fontWeight: "bold",
        paddingLeft: 10
    }
});