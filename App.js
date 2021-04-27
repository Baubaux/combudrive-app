import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lastscreen from './src/screens/Last.screen';
import Testscreen from './src/screens/Test.screen';
import Homescreen from './src/screens/Home.screen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import CategoryScreen from './src/screens/Category.screen';
import ServiceScreen from './src/screens/Service.screen';

export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Last">
        <Stack.Screen name="Last" component={ Lastscreen } />
        <Stack.Screen name="Test" component={ Testscreen } />
        <Stack.Screen name="New Home" component={ Homescreen } />
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Product" component={ ProductScreen } />
        <Stack.Screen name="Category" component={ CategoryScreen } />
        <Stack.Screen name="Service" component={ ServiceScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
