import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// import * as Font from 'expo-font';


import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import Colors from './constants/colors';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

// const fetchFonts = () => {
//     return Font.loadAsync({
//         'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//         'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//     })
// }

const App = props => {
    const [userNumber, setUserNumber] = useState(undefined);
    const [guessRounds, setGuessRounds] = useState(0);


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

    let content = <StartGameScreen
        onStartGame={startGameHandler}
    />


    if (userNumber && guessRounds <= 0) {
        content = <GameScreen
            userChoice={userNumber}
            onGameOver={gameOverHandler}
        />
    } else if (guessRounds > 0) {
        content = <GameOver rounds={guessRounds} onStartNewGame={startNewGame} userNumber={userNumber} />;
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess a Number" />
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
