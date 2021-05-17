import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

import {PRODUCTS} from "../data/ProductsData";

const ProductDetail = props => {

    const productId = props.navigation.getParam('productId');

    const selectedProduct = PRODUCTS.find(product => product.id === productId);

    return (
        <View style={styles.screen}>
            <Text>
                {selectedProduct.title}
            </Text>
            <Button
                title="Back to categories"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    )
};

// Setting text/style of header using function
ProductDetail.navigationOptions = navigationData => {
    const productId = navigationData.navigation.getParam('productId');
    const selectedProduct = PRODUCTS.find(product => product.id === productId);

    return {
        headerTitle: selectedProduct.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductDetail;
