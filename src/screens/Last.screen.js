import React, {useState, useEffect} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import Axios from 'axios';

import Header from '../components/Header/Header';
import PelletsCopy2 from '../components/Products/Pellets copy 2';
import Product from '../components/Products/Product';


export default function Lastscreen({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        Axios.get('http://localhost:5000/api/products')
        .then(({ data }) => {
            console.log("defaultApp -> data", data)
            setData(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);


    const [categoryProducts, setCategoryProducts] = useState([
        {
            id:0,
            category: "Pellets",
            description: "Tout nos granulés de bois",
            picture: "https://www.combudrive.fr/medias/images/service-carte-de-stockage.jpg?fx=r_1170_600",
            bgColor: "lightblue"
        },
        {
            id:1,
            category: "Bois",
            description: "Tout notre bois de chauffage",
            picture: "https://www.combudrive.fr/medias/images/diaporama-livraison-a-domicile-1.jpg",
            bgColor: "lightyellow"
        },
        {
            id:2,
            category: "Charbon",
            description: "Tout nos charbons",
            picture: "https://www.combudrive.fr/medias/images/ramonage-2-.jpg?fx=r_1170_600",
            bgColor: "lightgray"
        },
        {
            id:3,
            category: "Entretien",
            description: "Tout nos produits d'entretiens",
            picture: "https://www.combudrive.fr/medias/images/zone-de-livraison-2.jpg",
            bgColor: "lightpink"
        }
    ]);

    // Render

    function renderCategoryProducts(item, index) {
        return (
            <TouchableOpacity
                style={styles.categoryCard}
            >
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
                    <View style={{ height: '40%', justifyContent: 'space-between'}}>
                        <Text style={{textTransform: 'Uppercase'}}>{item.category}</Text>
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

    function renderProductItem(item, index) {
        return (
            <TouchableOpacity>
                <View style={styles.productCard} >
                    <View style={styles.productCardContent}>
                        <View style={styles.leftCardContent}>
                            <Image
                                style={styles.cardPicture}
                                source={{
                                    uri: item.picture1
                                }}
                            />
                        </View>
                        <View style={styles.rightCardContent}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text>{item.quality}</Text>
                            <Text>{item.weight}</Text>
                            <Text>{item.unit_price}</Text>
                            <Button 
                                title="Voir le produit"
                                color= '#FFDF4A'
                                onPress={() => navigation.navigate('Product', item)}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const [products, setProducts] = useState([])

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                {/* Categories */}
                <View>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categoryProducts}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item, index}) => renderCategoryProducts(item, index)}
                    />
                </View>
                {/* Products */}
                <View>
                    <FlatList 
                        vertical
                        data={data}
                        keyExtractor={item => item._id.toString()}
                        renderItem={({item, index}) => renderProductItem(item, index)}
                    />
                    {/* <Product data={data}/> */}
                </View>

            </ScrollView>
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    productCard: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray'
    },
    productCardContent: {
        flex: 2, 
        flexDirection: 'row', 
        backgroundColor: 'darkgray'
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
        fontSize: 18,
        paddingLeft: 10
    },
    categoryCard: {
        height: 150,
        width: 160,
        justifyContent: 'center',
        marginHorizontal: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5
    },
    leftCardContent:{

    },
    rightCardContent: {
        width: 300,
        padding: 5
    },
    cardPicture: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        padding: 5,
        fontSize: 25,
        textTransform: 'uppercase',
        color: 'white',
    },
});