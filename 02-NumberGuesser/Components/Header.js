import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Colors from '../constants/colors';
import TitleText from "./texts/TitleText";

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText
                style={{...props.style, ...styles.headerTitle}}
            >
                {props.title}
            </TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 35,
        backgroundColor: Colors.yellow,
    },
    headerTitle: {
        color: Colors.blurple,
        fontSize: 28,
    },
});

export default Header;
