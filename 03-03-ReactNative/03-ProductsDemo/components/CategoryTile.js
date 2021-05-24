import React from "react";
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../constants/Colors";

const CategoryTile = props => {

    return (
        <TouchableOpacity
            key={props.data.id}
            onPress={props.onSelect}
            style={{...styles.gridItem, backgroundColor: props.data.color}}
        >
            <Text
                numberOfLines={2}
                style={styles.gridText}
            >
                {props.data.title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        width:  Dimensions.get('window').height / 7,
        height: Dimensions.get('window').height / 7,
        margin: 15,
        padding: 10,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 5,
        shadowColor: Colors.companyGrey,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 3},
        shadowRadius: 5,
        elevation: 5
    },
    gridText: {
        fontFamily: 'montserrat-light',
        fontWeight: '900',
        color: 'white',
        fontSize: 18,
        textAlign: 'right',
    },
});

export default CategoryTile
