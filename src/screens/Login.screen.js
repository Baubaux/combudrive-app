import React from 'react';
import { ScrollView, SafeAreaView, Dimensions, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ProductScreen({route, navigation}) {
    const item = route.params;


    const windowHeight = Dimensions.get('window').height

    return (
        <SafeAreaView
            height={windowHeight}
        >
            <View style={styles.container}>
                <Text>Bonjour et bienvenue sur l'application Combudrive !</Text>
                <View style={styles.form}>
                    <TextInput style={{backgroundColor: 'white', borderColor: 'black', borderWidth: 1, width: 100}}></TextInput>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightcoral",
        flex: 1,
        alignItems: "center"
    }
})