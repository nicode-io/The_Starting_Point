import React from "react";
import {Image, ScrollView, StyleSheet, View} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Number from "../components/Number";
import TitleText from "../components/texts/TitleText";
import BodyText from "../components/texts/BodyText";
import GameButton from "../components/buttons/gameButton";

const GameOver = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Card style={styles.container}>
                    <TitleText style={{...props.style}}>The game is over !</TitleText>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/success.png')}
                            style={styles.image}
                            resizeMode="stretch"
                        />
                    </View>
                    <BodyText style={{...props.style}}>Your Number was: {props.userNumber}</BodyText>
                    <BodyText style={{...props.style}}>Computer rounds :</BodyText>
                    <Number>{props.rounds}</Number>
                    <BodyText style={{...props.style, paddingBottom: 10}}>to find your number</BodyText>
                    <GameButton
                        onPress={props.onStartNewGame}
                        bgColor={Colors.blurple}
                        textColor={Colors.green}
                    >
                        PLAY AGAIN
                    </GameButton>
                </Card>
                <BodyText
                    style={{color: Colors.black, marginTop: 10}}
                    numberOfLines={8}
                    ellipsizeMode="tail"
                >
                    This is a very small demo used during a first meet with Domintell. User specify a number and then computer will find this number according to user hints, lower or greater. At the end, user receive a feedback's summary of number of rounds it takes to find his number.
                </BodyText>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 50,
    },
    container: {
        width: 300,
        maxWidth: '80%',
        justifyContent: 'center',
        marginVertical: 30,
        backgroundColor: Colors.fuchsia,
    },
    imageContainer: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: Colors.blurple,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default GameOver
