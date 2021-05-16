import React, {useEffect, useRef, useState} from "react";
import {Alert, Button, StyleSheet, Text, View} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Number from "../components/Number";


// Random number generation
const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    // Check if random is the same as user choice
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {

    // States
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentMin = useRef(1);
    const currentMax = useRef(100);

    // Props destructuring
    const {userChoice, onGameOver} = props;

    // Effects
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    // Rounds management
    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\'t lie !', 'Computer know you\'re cheating ;)', [
                {text: 'Sorry!', style: 'cancel'}
            ]);
            return;
        }
        if (direction === 'lower') {
            currentMax.current = currentGuess;
        } else {
            currentMin.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(
            currentMin.current,
            currentMax.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setRounds(prevRounds => prevRounds += 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Opponent's Guess</Text>
            <Number>{currentGuess}</Number>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
        padding: 10,
    },
    text: {
        color: Colors.yellow,
        fontSize: 24,
        fontFamily: 'bangers-regular',
        textAlign: 'center',
    },
    buttonContainer: {
        width: 300,
        maxWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        backgroundColor: Colors.yellow,
    }
});

export default GameScreen
