import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import Number from "../components/Number";

const StartGameScreen = props => {

    // States
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmStartGame, setConfirmStartGame] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [confirmed, setConfirmed] = useState(false);

    // Filter user input
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    // Reset user input
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmStartGame(false);
        setConfirmed(false);
    }


    // User choice confirmation
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number must be between 1 and 99', [{
                text: 'Got It', style: 'cancel', onPress: resetInputHandler
            }])
        } else {
            Alert.alert(
                "We are ready to go",
                `Do you confirm ${enteredValue} for this game ?`,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log('Game cancelled'),
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: () => {
                            setConfirmStartGame(true);
                            setSelectedNumber(chosenNumber);
                            setEnteredValue('');
                            setConfirmed(true);
                            Keyboard.dismiss();
                        }
                    }
                ]
            );
        }
    }

    // Start game
    let confirmedOutput;

    if (confirmed && confirmStartGame) {
        confirmedOutput =
            <Card style={styles.confirmed}>
                <Text style={styles.confirmText}>Let's start !</Text>
                <Text style={styles.confirmText}>
                    You choose :
                </Text>
                <Number>{selectedNumber}</Number>
                <Button
                    title="START GAME"
                    color={Colors.green}
                    onPress={() => {props.onStartGame(selectedNumber)}}
                />
            </Card>
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View style={styles.screen}>
                    <Text style={styles.title}>Start a New Game !</Text>
                    <Card style={styles.inputContainer}>
                        <Text style={styles.text}>Select a Number (1-99)</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            maxLength={2}
                            onChangeText={numberInputHandler}
                            value={enteredValue}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button
                                    title="Reset"
                                    onPress={resetInputHandler}
                                    color={Colors.red}/>
                            </View>
                            <View style={styles.button}>
                                <Button
                                    title="Confirm"
                                    onPress={() => {
                                        confirmInputHandler();
                                    }}
                                    color={Colors.blurple}
                                />
                            </View>
                        </View>
                    </Card>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'bangers-regular',
        fontSize: 24,
        color: Colors.yellow,
        marginVertical: 10
    },
    text: {
        fontFamily: 'bangers-regular',
        fontSize: 20,
        color: Colors.blurple,
    },
    inputContainer: {
        width: 500,
        maxWidth: '80%',
        alignItems: 'center',
        backgroundColor: Colors.yellow
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        flex: 1,
        marginHorizontal: 10
    },
    input: {
        width: 50,
        textAlign: 'center',

    },
    confirmText: {
        color: Colors.yellow,
        fontSize: 24,
        fontFamily: 'bangers-regular',
        textAlign: 'center',
    },
    confirmed: {
        width: 500,
        maxWidth: '80%',
        marginVertical: 15,
        backgroundColor: Colors.blurple,

    },
});

export default StartGameScreen;
