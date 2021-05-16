import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/colors";

const HintMinusButton = props =>{
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={props.onPress}
        >
            <View style={styles.button}>
                <View style={styles.imageContainer}>
                    <Image
                        fadeDuration={3000}
                        source={require('../../assets/images/minus-white.png')}
                        style={styles.image}
                        resizeMode="stretch"
                    />
                </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: Colors.fuchsia
    },
    buttonText: {
        fontFamily: 'bangers-regular',
        fontSize: 20,
        textAlign: 'center',
    },
    imageContainer: {
        width: 20,
        height: 20,
        marginRight: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default HintMinusButton
