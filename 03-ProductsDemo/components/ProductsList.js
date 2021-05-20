import React from "react";
import {FlatList, StyleSheet, View} from "react-native";

const ProductsList = props => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.products}
                renderItem={props.renderProduct}
                style={styles.list}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    list: {
        borderRadius: 5
    }
});

export default ProductsList
