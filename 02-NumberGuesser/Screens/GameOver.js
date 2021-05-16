import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Number from "../components/Number";

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.title}>The game is over !</Text>
                <Text style={styles.title}>Your Number was: {props.userNumber}</Text>
                <Text style={styles.text}>Computer rounds :</Text>
                <Number>{props.rounds}</Number>
                <Text style={styles.text}>to find your number</Text>
            </Card>
            <Card style={styles.replayContainer}>
                <Button
                    title="Play Again"
                    onPress={props.onStartNewGame}
                    color={Colors.yellow}
                />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
        width: 300,
        maxWidth: '80%',
        marginVertical: 30,
        backgroundColor: Colors.fuchsia,
    },
    title: {
        textAlign: 'center',
        color: Colors.yellow,
        fontSize: 20,
        fontWeight: '700'
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },
    replayContainer: {
        width: 300,
        maxWidth: '60%',
        marginVertical: 10,
        backgroundColor: Colors.fuchsia,
    }
});

export default GameOver
