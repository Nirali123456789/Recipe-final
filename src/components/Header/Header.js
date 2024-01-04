import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import styles_h from './styles_h';
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';


const Header = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  })
  const navigation = useNavigation();

 
  return (
    <View style={styles_h.container}>
   
      <Image source={require('./assets/appicon.png')}
        style={styles_h.appIcon}>

      </Image>
      <Text style={styles_h.appName}>Recipe</Text>

    </View>
  );
};



export default Header;