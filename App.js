import { useEffect, useState,useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import Apploader from './src/components/Apploader';
import { Provider } from 'react-redux';
import * as Notifications from 'expo-notifications';

import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './src/components/Navigator/MainNavigator';
import DetailsScreen from './src/components/DetailsScreen';
import SplashScreenComponent from './src/components/SplashScreen';
import * as SplashScreen from 'expo-splash-screen';
const Stack = createStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => (
    {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true

    }),
  handleSuccess: (notificationId) => {
    // console.log('handleSuccess',notificationId)
  },
  handleError: (notificationId, error) => {
    console.log('Handler', notificationId + " " + notificationId)
  }

});

SplashScreen.preventAutoHideAsync()
  .then((prevented) => {
    console.log('Prevented:', prevented);
  })
  .catch((error) => {
    console.log('Prevent error:', error);
  });

export default function App() {

  useEffect(() => {
  
    setTimeout(() => {
      SplashScreen.hideAsync()
        .then((hidden) => {
          console.log('Hidden:', hidden);
        })
        .catch((error) => {
          console.log('Hide error:', error);
        });
    }, 5000); 
  }, []);
 





  //Listen to received notification
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      // console.log(' cv'+subscription)

    });
    return () => {
      subscription.remove();
    }
  }, []);

  //Listen to interacted notification
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {

      console.log(' response' + response)

    });
    return () => {
      subscription.remove();
    }
  })



  return (
    <Provider store={store}>
      <Apploader />
      <NavigationContainer >
       <Stack.Navigator>
          <Stack.Screen
              name="SplashScreen"
              component={SplashScreenComponent}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='Home'
              component={MainNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='DetailsScreen'
              component={DetailsScreen}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>

   

      </NavigationContainer>
    </Provider>
  );
}


