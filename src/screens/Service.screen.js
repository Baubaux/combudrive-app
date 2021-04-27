import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function ServiceScreen({route, navigation}) {
    const item = route.params;
    // console.log("l'item: ", item)
    // console.log(item.name)

    return (
        <SafeAreaView>
            <View style={styles.cardPicture}>
                <Image
                    style={styles.picture}
                    source={{
                        uri: item.picture1
                    }}
                />
            </View>
            <View style={styles.mainTitle}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.underTitle}>{item.quality}</Text>
            </View>
            <View style={styles.cardPrice}>
                <Text style={styles.price}>{item.unit_price}</Text>
            </View>
            <View style={styles.cardDescription}>
                <Text style={styles.cardTitle}>Description du produit :</Text>
                <Text>{item.description}</Text>
            </View>
            <View style={styles.cardInforamtions}>
                <View style={styles.cardUnityProduct}>
                    <Text>A EMPORTER :</Text>
                    <Text>{item.conditionning} de {item.weight}</Text>
                    <Text>Prix du {item.conditionning} : {item.unit_price}</Text>
                </View>
                <View style={styles.cardPaletProduct}>
                    <Text>EN LIVRAISON OU EN STOCKAGE :</Text>
                    <Text>Palette de {item.palet_conditionning}</Text>
                    <Text>Poids total : {item.palet_weight}</Text>
                    <Text>Prix à emporter : {item.take_away_price}</Text>
                    <Text>Prix en livraison : {item.delivery_palet_price}</Text>
                    <Text>Prix stockée : {item.stored_palet_price}</Text>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})