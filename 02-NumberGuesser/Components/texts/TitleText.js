import React from "react";
import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

const TitleText = props => {
    return (
        <Text
            style={{...styles.title, ...props.style}}
        >
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: Colors.yellow,
        fontFamily: 'bangers-regular',
        fontSize: 24,
        marginVertical: 10,
        paddingHorizontal: 5,
        textAlign: 'center',
    }
});

export default TitleText
