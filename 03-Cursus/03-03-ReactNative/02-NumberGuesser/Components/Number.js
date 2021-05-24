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
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: Colors.yellow,
        borderRadius: 5,
    },
    number: {
        color: Colors.yellow,
        fontSize: 28,
        fontFamily: 'bangers-regular',
        fontWeight: '800',
        textAlign: 'center'
    }
});

export default Number
