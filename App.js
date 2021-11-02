import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
import reactotron from 'reactotron-react-native'

import Home from './src/screens/Home'
import Booking from './src/screens/Booking'
import StoreLocation from './src/screens/StoreLocation'
import Voucher from './src/screens/Voucher'
import ProductDetail from './src/screens/ProductDetail';
import StoreLocationDetails from './src/screens/StoreLocationDetails';
import Account from './src/screens/Account'
import Login from './src/screens/Login';

export default function App() {

  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={Home} options={{headerShown: false}} />
        {/* <HomeStack.Screen name="Booking" component={Booking} options={{headerShown: false}} />
        <HomeStack.Screen name="StoreLocation" component={StoreLocation} options={{headerShown: false}} />
        <HomeStack.Screen name="Voucher" component={Voucher} /> */}
        <HomeStack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
        <HomeStack.Screen name="StoreLocationDetails" component={StoreLocationDetails} options={{headerShown: false}} />
        {/* <HomeStack.Screen name="Account" component={Account} /> */}
        <HomeStack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'cafe' : 'cafe-outline';
          } else if (route.name === 'Store') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
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
