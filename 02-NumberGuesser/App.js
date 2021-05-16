import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Colors from './constants/colors';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';

// Load fonts
const fetchFonts = () => {
    return Font.loadAsync({
        'bangers-regular': require('./assets/fonts/Bangers-Regular.ttf'),
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

const App = props => {
    // States
    const [userNumber, setUserNumber] = useState(undefined);
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    // Check if async font loading is done
    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={err => console.log(err)}
            />
        );
    }

    // Handlers
    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    }

    const gameOverHandler = numOfRounds => {
        setGuessRounds(numOfRounds);
    }

    const startNewGame = () => {
        setGuessRounds(0);
        setUserNumber('');
    }

    // Manage layout content
    let content = <StartGameScreen
        onStartGame={startGameHandler}
    />


    if (userNumber && guessRounds <= 0) {
        content = <GameScreen
            userChoice={userNumber}
            onGameOver={gameOverHandler}
        />
    } else if (guessRounds > 0) {
        content = <GameOver rounds={guessRounds} onStartNewGame={startNewGame} userNumber={userNumber}/>;
    }

    return (
        <View style={styles.screen}>
            <Header title={Platform.OS === 'android' ? 'Number Guesser Android' : 'Number Guesser iOS'}/>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.blurple,
    }
});

export default App
