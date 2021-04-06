import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CleaningProducts from '../components/CleaningProducts/CleaningProducts';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Pellets from '../components/Products/Pellets';
import Location from '../components/Location/Location';
import Services from '../components/Services/Services';
import Wood from '../components/Products/Wood';
import ProductItem from '../components/Products/ProductItem';

export default function HomeScreen({navigation}) {

    return (
        <ScrollView 
            style={styles.container}
            stickyHeaderIndices={[0]}
        >
            <StatusBar backgroundColor= 'white' style='light'/>
            <Header />
            <ProductItem />
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