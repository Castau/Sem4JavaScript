import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (<View style={styles.inputContainer}>
        <TextInput
            placeholder='Course Goal'
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal} />
        <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});


export default GoalInput;

