import React, { useState, useEffect, Component } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';


class ProductItem extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        // let url = 'http://localhost:5500/products'
        let url = 'https://jsonplaceholder.typicode.com/users' 

        axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log(res.data)
                console.log(res.data.name)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View>
                <FlatList>{this.state.data}</FlatList>
            </View>
        )
    }

}

export default ProductItem;