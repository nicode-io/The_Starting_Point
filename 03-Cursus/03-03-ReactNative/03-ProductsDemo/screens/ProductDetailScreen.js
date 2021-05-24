import React from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";

import {PRODUCTS} from "../data/ProductsData";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton.js";
import Colors from "../constants/Colors";

const ProductDetail = props => {

    const productId = props.navigation.getParam('productId');

    const selectedProduct = PRODUCTS.find(product => product.id === productId);

    return (
        <ScrollView>
                <Image
                    style={styles.img}
                    source={{uri: 'https://www.domintell.com/wp-content/uploads/2020/06/DTSC05B-F.png'}}
                />
                <View style={styles.productContainer}>
                    <Text style={styles.model}>{selectedProduct.title}</Text>
                    <Text style={styles.price}>{selectedProduct.price}€</Text>
                </View>
                <Text style={styles.title}>Description</Text>
                <View style={styles.details}>
                    <Text style={styles.listItem}>Backlit TFT color touchscreen for the control of all home automation
                        points, such as the setting of temperatures, clocks, audio, etc. It includes built-in sensors
                        for temperature, humidity, an Ethernet connection and password. This screen also allows to
                        display IP cameras and videophone streams.
                    </Text>
                </View>
        </ScrollView>
    )
};

// Setting text/style of header using function
ProductDetail.navigationOptions = navigationData => {
    const productId = navigationData.navigation.getParam('productId');
    const selectedProduct = PRODUCTS.find(product => product.id === productId);

    return {
        headerTitle: selectedProduct.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
    details: {
        alignItems: 'center'
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    model: {
        fontSize: 26,
        fontFamily: 'montserrat-light',
        fontWeight: '900',
        color: Colors.companyBlue,
        textAlign: 'center',
    },
    price: {
        fontSize: 28,
        fontFamily: 'montserrat-light',
        fontWeight: '900',
        color: Colors.companyBlue,
        textAlign: 'center',

    },
    title: {
        fontSize: 22,
        fontFamily: 'montserrat-light',
        fontWeight: '900',
        color: Colors.companyBlue,
        textAlign: 'center',
    },
    listItem: {
        width: '80%',
        marginVertical: 10,
        borderColor: Colors.companyBlue,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'montserrat-light',
    }
});

export default ProductDetail;
