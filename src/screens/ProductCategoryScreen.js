import React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProductsCategoryScreen({navigation}) {
    let deviceWidth = Dimensions.get('window').width
    let deviceHeight = Dimensions.get('window').heigth

    return (
        <ScrollView style={styles.container}>
            <View>
                <Button
                    title= "Retour"
                    onPress={() => navigation.navigate('Home')}
                    />
                <Text>Catégorie de produit</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                </View>
                <View style={styles.card2}>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                </View>
                <View style={styles.card2}>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightpink",
        textAlign: 'center',
        height: 'deviceHeight',
        width: "deviceWidth"
    },
    cardContainer: {
        flexDirection:"row",
        marginHorizontal: 15,
        marginTop: 10,
        justifyContent: "space-between"
    },
    card: {
        backgroundColor: "lightgray",
        width: 180,
        height: 200,
        borderRadius: 20,
        marginRight: 10,
    },
    card2: {
        backgroundColor: "lightgray",
        width: 180,
        height: 200,
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 20
    }
})