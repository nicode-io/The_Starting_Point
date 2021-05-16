import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Image, Dimensions} from 'react-native';


import Card from '../Components/Card';
import Input from '../Components/texts/Input';
import Colors from '../constants/colors';
import Number from "../Components/Number";
import TitleText from "../Components/texts/TitleText";
import BodyText from "../Components/texts/BodyText";
import GameButton from "../Components/buttons/gameButton";

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
    let content =
        <View>
            <Card style={styles.inputContainer}>
                <BodyText style={{...props.style, ...styles.text}}>Select a Number (1-99)</BodyText>
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
                        <GameButton
                            onPress={resetInputHandler}
                            bgColor={Colors.red}
                            textColor={Colors.white}
                        >
                            RESET
                        </GameButton>
                    </View>
                    <View style={styles.button}>
                        <GameButton
                            onPress={() => {
                                confirmInputHandler();
                            }}
                            bgColor={Colors.green}
                            textColor={Colors.white}
                        >
                            CONFIRM
                        </GameButton>
                    </View>
                </View>
            </Card>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={3000}
                    source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.domintell.com%2Fwp-content%2Fuploads%2F2018%2F10%2FDomintell-New-Logo-Baseline.png&f=1&nofb=1'}}
                    style={styles.image}
                    resizeMode="center"
                />
            </View>
        </View>

    if (confirmed && confirmStartGame) {
        content =
            <Card style={styles.confirmed}>
                <TitleText>Let's start !</TitleText>
                <BodyText>
                    You choose :
                </BodyText>
                <Number>{selectedNumber}</Number>
                <GameButton
                    onPress={() => {
                        props.onStartGame(selectedNumber)
                    }}
                    bgColor={Colors.fuchsia}
                    textColor={Colors.yellow}
                >
                    START GAME
                </GameButton>
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
                    <TitleText>Start a New Game !</TitleText>
                    {content}
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 25,
        paddingHorizontal: 10,
    },
    button: {
        width: Dimensions.get('window').width / 4,
        marginHorizontal: 10
    },
    confirmed: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        marginVertical: 15,
        backgroundColor: Colors.blurple,

    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
        backgroundColor: Colors.yellow
    },
    input: {
        width: 80,
        minWidth: '20%',
        maxWidth: '40%',
        textAlign: 'center',

    },
    text: {
        color: Colors.blurple,
    },
    startButton: {
        backgroundColor: Colors.fuchsia,
    },
    imageContainer: {
        width: 200,
        maxWidth: '100%',
        height: 200,
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default StartGameScreen;
