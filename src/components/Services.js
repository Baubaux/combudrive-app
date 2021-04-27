import React, {useState, useEffect} from 'react'
import { Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Axios from 'axios';

export default function Services({ navigation }) {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        Axios.get('http://localhost:5000/api/services')
        .then(({ data }) => {
            console.log("data : ", data)
            setData(data)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    function renderServiceItem(item, index) {
        return (
            <SafeAreaView>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <Text>{item.name}</Text>
                    </View>
                    <Button 
                        title="En savoir plus"
                        color='#FFDF4A'
                        onPress={() => navigation.navigate('Service', item)}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    return (
        <View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.mainTitle}>Les services que nous proposons :</Text>
                </View>
                <FlatList 
                    horizontal
                    data={data}
                    keyExtractor={item => item._id.toString()}
                    renderItem={({item, index}) => renderServiceItem(item, index)}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        padding: 10,
    },
    cardPicture: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    titleContainer: {
        alignItems: 'center'
    },
    mainTitle: {
        textTransform: 'uppercase',
        fontSize: 20
    }
})