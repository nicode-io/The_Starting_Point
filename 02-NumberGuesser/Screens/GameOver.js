import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import Card from "../components/Card";
import Number from "../components/Number";
import Colors from "../constants/colors";

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.title}>Your Number was: {props.userNumber}</Text>
                <Text style={styles.title}>The game is over !</Text>
                <Text style={styles.text}>Computer rounds :</Text>
                <Number>{props.rounds}</Number>
                <Text style={styles.text}>to find your number</Text>
            </Card>
            <Card style={styles.container}>
                <Button title='Play Again' onPress={props.onStartNewGame} />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 300,
        maxWidth: '80%',
      backgroundColor: Colors.fuchsia,
    },
    title: {
        textAlign: 'center',
        color: Colors.yellow,
        fontSize: 20,
        fontWeight:'700'
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
});

export default GameOver
