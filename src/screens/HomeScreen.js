import React, {useState, useEffect} from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Pellets from '../components/Products/Pellets';
// import PelletsCopy from '../components/Products/Pellets copy';
import PelletsCopy2 from '../components/Products/Pellets copy 2';
import PelletsCopy3 from '../components/Products/Pellets copy 3';
import Location from '../components/Location/Location';
import Wood from '../components/Products/Wood';

export default function HomeScreen({navigation}) {

    const [data, setData] = useState({})

    useEffect(() => {
        // axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=c0c8cbfa762ab92456e2cba411efece5")
        axios.get("http://localhost:5000/products")
        .then(res => {
            setData(res.data)
            // console.log(res.data.current.temp)
            console.log(res.data)
            console.log(res.data[1].title)
        })
    }, [])

    return (
        <ScrollView 
            style={styles.container}
            stickyHeaderIndices={[0]}
        >
            <StatusBar backgroundColor= 'white' style='light'/>
            <Header />
            {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop:40}}
            >
                <View style={styles.card}
                    onPress={() => navigation.navigate('Products')}
                >
                    <Button 
                            title="Pellets"
                            color="#F54E69"
                            style={styles.cardTitle}
                            onPress={() => navigation.navigate('Category')}
                    />
                </View>
                <View style={styles.card}
                    onPress={() => navigation.navigate('Products')}
                >
                    <Text style={styles.cardTitle}>Bois</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Charbon</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Entretien</Text>
                </View>
            </ScrollView>
            <Text style={styles.title}><MaterialIcons name="arrow-right" size={24} color="red" />Meilleures ventes</Text>
            <PelletsCopy />
            {*/ <PelletsCopy2 data={data}/> /*}
            <Pellets />
            <Text style={styles.title}><MaterialIcons name="arrow-right" size={24} color="blue" />Granulés de bois</Text>
            <Pellets />
            <Text style={styles.title}><MaterialIcons name="arrow-right" size={24} color="gray" />Bois de chauffage</Text>
            <Wood />
            <Text style={styles.title}><MaterialIcons name="arrow-right" size={24} color="green" />Produits d'entretien</Text>
            <CleaningProducts />
            <Text style={styles.title}><MaterialIcons name="arrow-right" size={24} color="yellow" />Services</Text>
            <Services />
            <Location/>
            <Contact /> */}
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