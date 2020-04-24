import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import facade from "../facade";


const MapScreen = props => {
    const [position, setPosition] = useState({ latitude: null, longitude: null })
    const [region, setRegion] = useState(null);
    const [teams, setTeams] = useState([]);
    let mapRef = useRef(null);
    let distance = 10000

    useEffect(() => {
        getLocationAsync();
    }, [])

    useEffect(() => {
        centerRegion();
        nearByTeams();
    }, [region])


    getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permission to access location was denied', 'Access location is required to use this application...', [{ text: 'Okay', style: 'destructive' }])
            return
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setPosition({ latitude: location.coords.latitude, longitude: location.coords.longitude })
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });
    };

    const centerRegion = () => {
        if (region) mapRef.current.animateToRegion(region, 1000);
    };


    const nearByTeams = async () => {
        try {
            const data = await facade.findNearbyTeams(
                props.user.username,
                props.user.password,
                position.latitude,
                position.longitude,
                distance
            );
            setTeams(data);
        } catch (err) {
            console.log(err);
        }
    };

    const teamMarkers = () => {
        if (teams) {
            const teamsMarkers = teams.map((team) => {
                return (
                    <MapView.Marker key={team.userName} title={team.userName} pinColor="blue"
                        coordinate={{ longitude: team.lat, latitude: team.lon }} />
                );
            });
            return teamsMarkers;
        }
    };

    console.log('teams ', teams)
    console.log('log', teamMarkers())
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View>
                <MapView ref={mapRef} mapType="standard" style={styles.mapStyle}>
                    {position.longitude && (
                        <MapView.Marker title="Me" pinColor="purple"
                            coordinate={{ longitude: position.longitude, latitude: position.latitude }} />
                    )}
                    {teams && teamMarkers()}
                </MapView>
            </View>
        </TouchableWithoutFeedback>)
};

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default MapScreen;