import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                    { key: 'Devin1' },
                    { key: 'Dan1' },
                    { key: 'Dominic1' },
                    { key: 'Jackson1' },
                    { key: 'James1' },
                    { key: 'Joel1' },
                    { key: 'Joh1' },
                    { key: 'Jillian1' },
                    { key: 'Jimmy1' },
                    { key: 'Julie1' }
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


//https://reactnative.dev/docs/using-a-listview
export default function FlatlistScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>Flatlist Basics</Text>
            <FlatListBasics />
        </View>
    );
}