import React from 'react';
import {SafeAreaView} from 'react-native';
import MainStack from './navigation/MainStack';

const App = () => {
  console.log('App');

  return (
    <SafeAreaView style={{flex:1}}>
      <MainStack />
    </SafeAreaView>
  );
};

export default App;
