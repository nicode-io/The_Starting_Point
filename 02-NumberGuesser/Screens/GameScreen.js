import React, {useEffect, useRef, useState} from "react";
import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

import Card from "../components/Card";
import Colors from "../constants/colors";
import Number from "../components/Number";
import TitleText from "../components/texts/TitleText";
import HintPlusButton from "../components/buttons/HintButton";
import HintButton from "../components/buttons/HintButton";
import BodyText from "../components/texts/BodyText";


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
    const [allGuesses, setAllGuesses] = useState([]);
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
            Alert.alert('Don\'t lie !', 'Computer knows when you\'re cheating ;)', [
                {text: 'Oups !', style: 'cancel'}
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
        setAllGuesses(prevGuesses => [...prevGuesses, currentGuess])
        setCurrentGuess(nextNumber);
        setRounds(prevRounds => prevRounds += 1);
    };

    return (
        <View style={styles.screen}>
            <TitleText style={{...props.style}}>
                Opponent's Guess&nbsp;
            </TitleText>
            <Number>{currentGuess}</Number>
            <Card style={styles.buttonContainer}>
                <HintButton
                    onPress={nextGuessHandler.bind(this, 'lower')}
                    iconName={'ios-remove-circle-outline'}
                >
                    LOWER&nbsp;
                </HintButton>
                <HintButton
                    onPress={nextGuessHandler.bind(this, 'greater')}
                    iconName={'ios-add-circle-outline'}
                >
                    GREATER&nbsp;
                </HintButton>
            </Card>
            <Card style={styles.allGuesses}>
                <TitleText>Already guessed</TitleText>
                <ScrollView contentContainerStyle={styles.scrollStyle}>
                    {allGuesses.map((guess, index) =>
                        <BodyText
                            key={index}
                        >
                            Round #{index+1}&nbsp;&nbsp;
                            Guess: {guess}
                        </BodyText>)}
                </ScrollView>
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 10,
    },
    buttonContainer: {
        width: 400,
        maxWidth: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        backgroundColor: Colors.yellow,
    },
    allGuesses: {
        width: 250,
        maxWidth: '80%',
        marginTop: 15,
        paddingBottom: 30,
        backgroundColor: Colors.fuchsia
    },
    scrollStyle: {
        flexDirection: 'column-reverse'
    },
});

export default GameScreen
