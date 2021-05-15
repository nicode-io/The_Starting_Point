import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../constants/colors";

const Number = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        maxWidth: '25%',
        borderWidth: 3,
        borderColor: Colors.yellow,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.yellow,
        fontSize: 22,
        fontWeight: '900',
        textAlign: 'center'
    }
});

export default Number
