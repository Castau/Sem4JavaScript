import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import MapScreen from './screens/MapScreen';

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    let content = <StartScreen setLoggedIn={setLoggedIn} setUser={setUser} />;
    if (loggedIn) {
        content = <MapScreen user={user} loggedIn={loggedIn} />
    }

    return (
        <View style={styles.screen}>
            <Header title="T E A M F I N D E R" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
