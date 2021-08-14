import React from 'react';
import { Text } from 'react-native';
import { LoginStore } from 'stores/views/loginStore';
const LoginView = () => {
  let loginStore = new LoginStore();
  loginStore.login();
  return <Text> {'Login'} </Text>;
};

export default LoginView;
