import React from 'react';
import { Text, View } from 'react-native';

function Cat(props) {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
}

function Cafe() {
    return (
        <View>
            <Cat name="Maru" />
            <Cat name="Jellylorum" />
            <Cat name="Spot" />
        </View>
    );
}

// https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>PropsDemo</Text>
            <Cafe />
        </View>
    );
}

