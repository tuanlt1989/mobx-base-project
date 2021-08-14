import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SplashView = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style = {{width: 200, height: 200, backgroundColor: '#f234'}}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text>{'Hello'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashView;
