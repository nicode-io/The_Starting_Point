import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const HintButton = props =>{
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={props.onPress}
        >
            <View style={{
                ...styles.button,
                backgroundColor: props.bgColor,
                textColor: props.textColor,
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: props.textColor,
                }}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 5,
        padding: 15,
    },
    buttonText: {
        fontFamily: 'bangers-regular',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default HintButton
