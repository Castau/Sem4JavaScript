import React from 'react';
import { View, Text } from 'react-native';

const AlignItemsBasics = () => {
    return (
        // Try setting `alignItems` to 'flex-start'
        // Try setting `justifyContent` to `flex-end`.
        // Try setting `flexDirection` to `row`.
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ height: 50, backgroundColor: 'skyblue' }} />
            <View style={{ height: 100, backgroundColor: 'steelblue' }} />
        </View>
    );
};

// https://reactnative.dev/docs/flexbox#flex-direction
export default function AlignItemsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Aligh Items</Text>
            <AlignItemsBasics />
        </View>
    );
}