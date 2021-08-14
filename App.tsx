import React from 'react';
import { GlobalStore } from 'stores/domains/globalStore';
import { StoreProvider } from 'stores/domains/useGlobalStore';
import { AppNavigator } from 'views/navigation/appNavigator';

const App = () => {
  let globalStore = new GlobalStore();
  return (
    <StoreProvider value={globalStore}>
      <AppNavigator />
    </StoreProvider>
  );
};

export default App;
