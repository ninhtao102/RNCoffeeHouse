import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
import reactotron from 'reactotron-react-native'

import Home from './src/screens/Home'
import Booking from './src/screens/Booking'
import StoreLocation from './src/screens/StoreLocation'
import Voucher from './src/screens/Voucher'
import Account from './src/screens/Account'
import ProductDetail from './src/screens/ProductDetail'
import StoreLocationDetails from './src/screens/StoreLocationDetails'

export default function App() {

  // const Stack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Booking" component={Booking} />
        <HomeStack.Screen name="StoreLocation" component={StoreLocation} />
        <HomeStack.Screen name="Voucher" component={Voucher} />
        <HomeStack.Screen name="Account" component={Account} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'cafe' : 'cafe-outline';
          } else if (route.name === 'StoreLocation') {
            iconName = focused ? 'wine' : 'wine-outline';
          } else if (route.name === 'Voucher') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'menu' : 'menu-outline';
          }
          
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Booking" component={Booking} />
        <Tab.Screen name="Store" component={StoreLocation} />
        <Tab.Screen name="Voucher" component={Voucher} />
        <Tab.Screen name="Account" component={Account} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
