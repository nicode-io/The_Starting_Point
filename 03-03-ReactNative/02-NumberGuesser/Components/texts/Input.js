import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from "../../constants/colors";

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomColor: Colors.blurple,
        borderBottomWidth: 3,
        marginTop: 30,
        marginVertical: 10,
        paddingTop: 0,
        color: Colors.blurple,
        fontFamily: 'bangers-regular',
        fontSize: 36
    }
});

export default Input;
