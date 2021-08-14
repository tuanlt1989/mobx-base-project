import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeView from 'views/home/homeView';
import LoginView from 'views/login/loginView';

const BottomTab = createBottomTabNavigator();

const MainView = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeView} />
      <BottomTab.Screen name="Login" component={LoginView} />
    </BottomTab.Navigator>

    
  );
};

export default MainView;