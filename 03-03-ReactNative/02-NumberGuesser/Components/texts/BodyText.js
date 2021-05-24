import React from 'react';
import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";


const BodyText = props => {
    return (
        <Text
            style={{...styles.body, ...props.style}}
        >
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 5,
        color: Colors.yellow,
        fontFamily: 'bangers-regular',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default BodyText
