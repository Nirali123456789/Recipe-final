
import { View, Text, Image, TouchableOpacity, Switch, Modal, Alert, ScrollView } from 'react-native';
import styles_d from './styles_d'
import { useState } from 'react';

const DetailsScreen = ({ route }) => {


  const { name, image, description } = route.params;

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleSwitch = () => {
    Alert.alert(
      'Confirm',
      'Do you want to save the changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => setIsSwitchOn((prevState) => !prevState),
        },
        {
          text: 'OK',
          onPress: () => {
            setIsSwitchOn((prevState) => !prevState);
            setModalVisible(true);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles_d.container}>


      <ScrollView>
        <View style={styles_d.card}>
          <Image source={{ uri: image }} style={styles_d.image} />
        </View>
        <Text style={styles_d.name}>{name}</Text>
        <Text style={styles_d.description}>{description}</Text>
        <View style={styles_d.switchContainer}>
          <Text style={styles_d.name}>Want to save? </Text>
          <Switch
            value={isSwitchOn}
            onValueChange={toggleSwitch}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles_d.alertBox}>
            <View style={styles_d.modalContent}>
              <Text>Saved!! Touch To close </Text>
              <TouchableOpacity onPress={closeModal}>
                <Text>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};


export default DetailsScreen;

