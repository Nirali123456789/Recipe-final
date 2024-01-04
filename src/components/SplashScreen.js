import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreenComponent = ({ navigation }) => {
    useEffect(() => {
        const initApp = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await new Promise(resolve => setTimeout(resolve, 6000));

                await SplashScreen.hideAsync();

                navigation.replace('Home');

            } catch (error) {
                console.warn(error);
            }
        };

        initApp();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('./Header/assets/appicon.png')} style={styles.logo} />
            <Text style={styles.text}>Recipe</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
});

export default SplashScreenComponent;
