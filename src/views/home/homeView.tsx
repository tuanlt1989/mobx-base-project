import { Observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useGlobalStore } from 'stores/domains/useGlobalStore';
import { HomeStore } from 'stores/views/homeStore';

const HomeView = () => {
  let homeStore = new HomeStore();
  let {userStore} = useGlobalStore();
  return (
    <Observer>
      {() => (
        <View style = {{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={{width: 100, height: 100, backgroundColor: '#f342'}}
            onPress={() => homeStore.addAlo()}></TouchableOpacity>
          <Text style = {{fontSize: 20}}>{homeStore.alo + " " + userStore.name}</Text>
        </View>
      )}
    </Observer>
  );
};

export default HomeView;
