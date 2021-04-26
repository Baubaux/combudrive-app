import React, {useState, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import axios from 'axios';

import Header from '../components/Header/Header';
import PelletsCopy2 from '../components/Products/Pellets copy 2';
import { FlatList } from 'react-native-gesture-handler';

export default function Homescreen({navigation}) {

    // const [data, setData] = useState({})

    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/products")
    //     .then(res => {
    //         setData(res.data)
    //         console.log("La data que je cherche a afficher : " + res.data)
    //         // console.log(res.data[1].title)
    //         console.log(res.data[0].name);
    //         console.log(res.data.name);
    //     })
    // }, [])

    const data = [
        {
            name: "My Pellets",
            description: "fezefseesf",
            unit_price: "5.00 €"
        },
        {
            name: "Barlinek",
            description: "fesfesfsefesfsggs",
            unit_price: "3.00 €"
        },
        {
            name: "Brizant Pellets",
            description: "qpojfojseisqjesieFEF",
            unit_price: "2.40 €"
        }
    ]

    return (
        // <View>
        //     <Text>Test</Text>
        //     <FlatList>
        //         <Text>Titre :</Text>
        //         <Text>Prix : </Text>
        //         <Text>Poids :</Text>
        //     </FlatList>
        // </View>

    // <View data={data}>
    //     <Text>Test</Text>
    //     <Text>{data.name}</Text>
    // </View>



        <ScrollView 
            style={styles.container}
            stickyHeaderIndices={[0]}
        >
            <StatusBar backgroundColor= 'white' style='light'/>
            <Header />
            {/* <FlatList 
                data={this.state.product}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id.toSting()}
            /> */}
            <PelletsCopy2 data={data}/> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        margin: 20,
        height: 30,
        fontSize: 25,
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
        fontSize: 18,
        paddingLeft: 10
    }
});