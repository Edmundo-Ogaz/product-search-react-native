import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from '../screens/Product';
import Map from '../screens/Map';
import Test from '../screens/Test';
import Menu from '../screens/Menu';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  console.log('MainStack');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
        <Stack.Screen name="Product" component={Product} options={{ title: 'Productos' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Busqueda' }} />
        <Stack.Screen name="Test" component={Test} options={{ title: 'Mapa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
