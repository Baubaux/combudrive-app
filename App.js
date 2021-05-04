import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lastscreen from './src/screens/Last.screen';
import Testscreen from './src/screens/Test.screen';
import Homescreen from './src/screens/Home.screen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import CategoryScreen from './src/screens/Category.screen';
import ServiceScreen from './src/screens/Service.screen';
import LoginScreen from './src/screens/Login.screen';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Last" component={Lastscreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={CategoryScreen} />
      <CategoryStack.Screen name="Product" component={ProductScreen} />
    </CategoryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Accueil' component={HomeStackScreen} />
        <Tab.Screen name='Nos produits' component={CategoryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Last">
//         <Tab.Screen name="Login" component={ LoginScreen } />
//         <Tab.Screen name="Last" component={ Lastscreen } />
//         {/* <Tab.Screen name="Test" component={ Testscreen } />
//         <Tab.Screen name="New Home" component={ Homescreen } /> */}
//         {/* <Tab.Screen name="Home" component={ HomeScreen } /> */}
//         <Stack.Screen name="Product" component={ ProductScreen } />
//         <Tab.Screen name="Category" component={ CategoryScreen } />
//         <Tab.Screen name="Service" component={ ServiceScreen } />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
