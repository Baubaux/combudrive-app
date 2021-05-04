import React, {useState, useEffect} from 'react';
import { Button, FlatList, Dimensions, ScrollView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import Axios from 'axios';

import Header from '../components/Header/Header';
import Services from '../components/Services';
import App from '../../App';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


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
                style={styles.categoryHeader}
                onPress={() => navigation.navigate('Category', item)}
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
                    onPress={() => navigation.navigate('Category', item)}
                >
                    <View style={styles.categoryContent}>
                        <Text style={{textTransform: 'uppercase'}}>{item.category}</Text>
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
                            <Text style={styles.cardText}>{item.introduction}</Text>
                            <Text style={styles.cardText}>{item.conditionning} de {item.weight}</Text>
                            <Text style={{color: '#F44C4B', fontSize: 20, fontWeight: 'bold'}}>{item.unit_price}</Text>
                            <View style={styles.button}>
                                <Button 
                                    title= "Voir le produit"
                                    color= '#FEE845'
                                    onPress={() => navigation.navigate('Product', item)}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const [products, setProducts] = useState([])

    if(Object.keys(data).length !==0){
        return (
            <SafeAreaView
                height={windowHeight}
            >
                <View>
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
                    </View>
                    <Services />
                </View>
            </SafeAreaView>
        );
    } else {
        return (
            <AppLoading />
        )
    }
}

const styles = StyleSheet.create({
    // Category
    categoryHeader: {
        height: 150,
        width: 160,
        justifyContent: 'center',
        marginHorizontal: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5
    },
    categoryContent: {
        height: '40%', 
        justifyContent: 'space-between'
    },
    // Product Card
    productCard: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'lightgray',
        shadowOpacity: 100,
        shadowRadius: 10,
    },
    productCardContent: {
        flexDirection: 'row'
    },
    leftCardContent:{
        justifyContent: 'center',
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOpacity: 100,
        shadowRadius: 10,
    },
    rightCardContent: {
        width: 550,
        padding: 20,
        alignItems: 'center',
    },
    cardPicture: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        padding: 5,
        fontSize: 30,
        textTransform: 'uppercase'
    },
    cardText: {
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 17,
        color: '#4E4C4C',
        fontStyle: 'italic'
    },
    button: {
        alignItems: 'center',
        width: 200,
        margin: 15,
        marginTop: 10,
    }
});