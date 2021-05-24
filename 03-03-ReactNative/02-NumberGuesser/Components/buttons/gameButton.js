import React from "react";
import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

const GameButton = props =>{

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <ButtonComponent
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
        </ButtonComponent>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '90%',
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

export default GameButton
