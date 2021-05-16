import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/colors";

const StartGameButton = props =>{
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={props.onPress}
        >
            <View style={{...styles.button, backgroundColor: props.bgColor}}>
                <Text style={styles.buttonText}>{props.children}</Text>
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
        color: Colors.yellow,
        fontFamily: 'bangers-regular',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default StartGameButton
