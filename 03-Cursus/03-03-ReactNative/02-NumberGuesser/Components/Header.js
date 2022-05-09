import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';

import Colors from '../constants/colors';
import TitleText from "./texts/TitleText";

const Header = props => {
    return (
            <View
                style={{...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
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
    },
    headerIOS: {
        backgroundColor: Colors.yellow,
        borderBottomColor: Colors.fuchsia,
        borderBottomWidth: 2
    },
    headerAndroid: {
        backgroundColor: Colors.fuchsia,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: 1,
    },
    headerTitle: {
        color: Platform.OS === 'android' ? Colors.yellow : Colors.blurple,
        fontSize: 28,
    },
});

export default Header;
