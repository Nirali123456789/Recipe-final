// Your main navigator component
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../DetailsScreen';
import Settings from '../Settings/index';
import Pizzas from '../Pizzas/Pizzas'

import Tasks from '../Tasks/Tasks'
import { FontAwesome } from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import Header from '../Header/Header';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();


function MainNavigator() {

  const [tasks, setTasks] = useState([]);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}
    >
      <Header />
      <StatusBar style="auto" />

      <Tab.Navigator

        screenOptions={{
          headerShown: false,
          "tabBarActiveTintColor": "#FDB510",
          "tabBarInactiveTintColor": "gray",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}
      >
        <Tab.Screen name='Desert'
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="coffee" size={size} color={color} />
            ),
          }}>
          {(props) => (
            <Tasks
              {...props}
              tasks={tasks}

            />
          )}


        </Tab.Screen>

        <Tab.Screen name='Pizza'
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list" size={size} color={color} />
            ),
          }}
        >
          {(props) => (
            <Pizzas
              {...props}

            />
          )}


        </Tab.Screen>
        <Tab.Screen name='Settings'
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="cog" size={size} color={color} />
            ),
          }}
        >
          {(props) => (
            <Settings
              {...props}

            />
          )}


        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}
export default MainNavigator;
