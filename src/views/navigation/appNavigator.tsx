import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import HomeView from 'views/home/homeView';
import LoginView from 'views/login/loginView';
import MainView from 'views/main/mainView';
import SplashView from 'views/splash/splashView';

export const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          gestureEnabled: Platform.OS === 'ios',
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Splash" component={SplashView} />
        <Stack.Screen name="Main" component={MainView} />
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Login" component={LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
