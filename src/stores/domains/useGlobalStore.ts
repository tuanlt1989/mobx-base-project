import React, { createContext } from 'react';
import { GlobalStore } from './globalStore';

const storeContext = createContext<GlobalStore>({} as GlobalStore);
export const StoreProvider = storeContext.Provider;
export function useGlobalStore() {
  const store = React.useContext(storeContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}