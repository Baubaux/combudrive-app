import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProductCategoryScreen from './src/screens/ProductCategoryScreen';


export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ ProductScreen } />
      <Stack.Screen name="Category" component={ ProductCategoryScreen } />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
