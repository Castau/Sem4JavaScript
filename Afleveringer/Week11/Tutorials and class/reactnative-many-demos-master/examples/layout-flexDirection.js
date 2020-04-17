import React from 'react';
import { View, Text } from 'react-native';

const FlexDirectionBasics = () => {
    return (
        // Try setting `flexDirection` to `column`.
        <>
            <View style={{ flex: 3, flexDirection: 'column' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 70, height: 30, backgroundColor: 'powderblue' }} />
                <View style={{ width: 70, height: 30, backgroundColor: 'skyblue' }} />
                <View style={{ width: 70, height: 30, backgroundColor: 'steelblue' }} />
            </View>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ width: 90, height: 90, backgroundColor: 'powderblue' }} />
                <View style={{ width: 90, height: 90, backgroundColor: 'steelblue' }} />
            </View>
        </>
    );
};

// https://reactnative.dev/docs/flexbox#flex-direction
export default function FlexDirectionScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Flex Direction</Text>
            <FlexDirectionBasics />
        </View>
    );
}