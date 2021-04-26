import React from 'react'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import getProductDetailFromApi from '../../API/CombudriveApi'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        product: undefined,
        isLoading: true
        }
    }

    componentDidMount() {
        getProductDetailFromApi(this.props.).then(data => {
            this.setState({
                product: data,
                isLoading: false
            })
        })
    }

    _displayLoading() {
        if (this.state.isLoading) {
        return (
            <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
            </View>
        )
        }
    }

    _displayProduct() {
        const { product } = this.state
        if (product != undefined) {
        return (
            <ScrollView style={styles.scrollview_container}>
            <Text style={styles.title_text}>{product.name}</Text>
            <Text style={styles.description_text}>{product.username}</Text>
            <Text style={styles.default_text}>{product.email}</Text>
            <Text style={styles.default_text}>{product.phone}</Text>
            <Text style={styles.default_text}>{product.id}</Text>
            <Text style={styles.default_text}>{product.website}</Text>
            </ScrollView>
        )
        }
    }

    render() {
        return (
        <View style={styles.main_container}>
            {this._displayLoading()}
            {this._displayProduct()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
})

export default ProductDetail