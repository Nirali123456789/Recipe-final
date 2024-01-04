import React from "react";
import { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles_p from "./ styles";
import { useNavigation } from '@react-navigation/native';



export default function Pizza({ task }) {

  const { name, image, description } = task;
  const navigation = useNavigation();

  const navigatePress = () => {
    console.log('json:', name);

    if (image && description && name) {
      navigation.navigate('DetailsScreen', {
        name: name,
        image: image,
        description: description,
      });
    }
  }

  return (
    <View style={styles_p.pizzaContainer}>
      <Pressable onPress={navigatePress} >
        <Text style={styles_p.title}>{name}</Text>
        <Image source={{ uri: image }}
          style={{ height: 200 }}
        />

      </Pressable>

    </View>
  );
}
