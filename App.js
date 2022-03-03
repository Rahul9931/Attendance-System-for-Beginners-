import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Mymodal from './src/Components/Modal/Mymodal';
import CustomTable from './src/Components/Table/CustomTable';
import Routes from './src/Navigations/Routes';
import store from './src/Redux/store';

store.subscribe(()=>console.log(store.getState()))
const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
      <SafeAreaProvider>
     <Routes />
     </SafeAreaProvider>
     </Provider>
      
    </View>
  );
};
export default App;

