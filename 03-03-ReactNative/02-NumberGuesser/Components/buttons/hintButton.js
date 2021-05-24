import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/colors";
import Card from "../Card";
import {Ionicons} from "@expo/vector-icons";
import BodyText from "../texts/BodyText";

const HintButton = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={props.onPress}
            style={styles.container}
        >
            <BodyText style={{
                ...props.style,
                color: Colors.fuchsia,
                fontSize: 26
            }}>
                {props.children}
            </BodyText>
            <Ionicons
                color={Colors.fuchsia}
                name={props.iconName}
                size={80}
                style={styles.icon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HintButton
