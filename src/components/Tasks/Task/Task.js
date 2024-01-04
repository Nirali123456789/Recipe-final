import React from "react";
import { useState } from 'react';
import { View, Text, Pressable, Modal, Switch, Alert, Image } from 'react-native';
import styles_t from "./ styles";

import { useNavigation } from '@react-navigation/native';





export default function Task({ task }) {

  const { id, Name, image, des } = task;

  const navigation = useNavigation();

  const navigatePress = () => {
    // console.log('json:', JSON.stringify(task));

    if (image && des && Name) {
      navigation.navigate('DetailsScreen', {
        name: Name,
        image: image,
        description: des,
      });
    }
  }

  return (
    <>
      <View style={styles_t.container}>
        <Pressable onPress={navigatePress}>


          <Text style={styles_t.title}>{Name}</Text>
          <Image source={{ uri: image }}
            style={{ height: 200 }}
          />

        </Pressable>

      </View>



    </>
  );
}