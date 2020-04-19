import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const GameOverScreen = props => {
    return (

        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>The Game is over</Text>
                <Text style={styles.text}>Number of Rounds</Text>
                <NumberContainer>{props.roundsNumber}</NumberContainer>
                <Text style={styles.text}>The number to guess was</Text>
                <NumberContainer>{props.userNumber}</NumberContainer>
                <Button title="NEW GAME" color={colors.secondary} onPress={props.onRestart} />
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
    title: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10

    },
    text: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOverScreen;