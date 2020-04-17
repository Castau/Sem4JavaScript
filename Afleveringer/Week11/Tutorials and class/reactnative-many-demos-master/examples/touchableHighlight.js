import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";



function TouchableHighlightExample() {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={onPress}>
                <Text> Touch Here </Text>
            </TouchableHighlight>

            <View style={styles.countContainer}>
                <Text style={styles.countText}>{count !== 0 ? count : null}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
});

// https://reactnative.dev/docs/touchablehighlight
export default function TouchableHighlightScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>TouchableHighlight</Text>
            <TouchableHighlightExample />
        </View>
    );
}


