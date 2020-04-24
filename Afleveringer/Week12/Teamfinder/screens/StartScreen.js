import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import facade from "../facade";


const StartScreen = props => {
    const [welcomeMsg, setWelcomeMsg] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getWelcomeMsg();
    }, [])

    async function getWelcomeMsg() {
        try {
            const msg = await facade.welcomeGet();
            setWelcomeMsg(msg)
        } catch (err) {
            console.log('ERROR')
        }
    }

    const loginHandler = (username, password) => {
        if (!username || !password) {
            Alert.alert(
                'Invalid Login Attempt', 'Please input a valid username and password to proceed...', [{ text: 'Okay', style: 'destructive', onPress: clearInput }])
            return;
        }
        props.setUser({
            username,
            password,
        });
        props.setLoggedIn(true);
        Keyboard.dismiss();
        clearInput();
    };

    const userInputHandler = inputText => {
        setUsername(inputText);
    };

    const passInputHandler = inputText => {
        setPassword(inputText);
    };

    const clearInput = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Card style={styles.container}>
                    <Text style={styles.title}>{welcomeMsg.msg}</Text>
                    <Text style={styles.text}>{welcomeMsg.author}</Text>
                    <Input style={styles.input}
                        placeholder='USERNAME'
                        onChangeText={userInputHandler}
                        value={username}
                    />
                    <Input style={styles.input}
                        placeholder='PASSWORD'
                        onChangeText={passInputHandler}
                        value={password}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title='FIND TEAMS'
                                color={colors.primary}
                                onPress={loginHandler.bind(this, username, password)} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>)
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        color: colors.secondary,
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10

    },
    text: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 20

    },
    container: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginVertical: 20
    },
    button: {
        width: "60%",
    },
    input: {
        width: 100,
        textAlign: 'center'
    }
});

export default StartScreen;