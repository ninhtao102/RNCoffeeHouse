import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import reactotron from 'reactotron-react-native'

import Home from './src/screens/Home'
import Booking from './src/screens/Booking'
import StoreLocation from './src/screens/StoreLocation'
import Voucher from './src/screens/Voucher'
import ProductDetail from './src/screens/ProductDetail'
import StoreLocationDetails from './src/screens/StoreLocationDetails'
import Account from './src/screens/Account'
import Login from './src/screens/Login'
import Cart from './src/screens/Cart'

import Header from './src/appNavigation/Header'
import SelectHeader from './src/appNavigation/SelectHeader'
import CodeUsers from './src/components/CodeUsers'

export default function App() {

  const HomeStack = createNativeStackNavigator()
  const BookingStack = createNativeStackNavigator()
  const StoreStack = createNativeStackNavigator()
  const VoucherStack = createNativeStackNavigator()
  const AccountStack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
        name="HomeScreen" 
        component={Home} 
        options={{
          header: () => (
            <Header/>
          )
        }}
        />
        <HomeStack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </HomeStack.Navigator>
    );
  }
  
  function BookingStackScreen() {
    return (
      <BookingStack.Navigator>
        <BookingStack.Screen 
        name="BookingScreen" 
        component={Booking} 
        options={{
          header: () => (
            <SelectHeader/>
          )
        }}
        />
        <BookingStack.Screen name="ProductDetail" component={ProductDetail} />
      </BookingStack.Navigator>
    );
  }

  function StoreStackScreen() {
    return (
      <StoreStack.Navigator>
        <StoreStack.Screen 
        name="StoreLocationScreen" 
        component={StoreLocation} 
        options={{
          header: () => (
            <Header/>
          )
        }}
        />
        <StoreStack.Screen name="StoreLocationDetails" component={StoreLocationDetails} />
      </StoreStack.Navigator>
    );
  }

  function VoucherStackScreen() {
    return (
      <VoucherStack.Navigator>
        <VoucherStack.Screen 
        name="VoucherScreen" 
        component={Voucher} 
        options={{
          header: () => (
            <Header/>
          )
        }}
        />
        <VoucherStack.Screen name="CodeUsers" component={CodeUsers} 
        // options={{headerShown: false}} 
        />
      </VoucherStack.Navigator>
    );
  }

  function AccountStackScreen() {
    return (
      <AccountStack.Navigator>
        <AccountStack.Screen 
        name="AccountScreen" 
        component={Account} 
        options={{
          header: () => (
            <Header/>
          )
        }}
        />
        <AccountStack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </AccountStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
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
          } else if (route.name === 'Cart') {
            iconName = focused ? 'basket' : 'basket-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Booking" component={BookingStackScreen} />
        <Tab.Screen name="Store" component={StoreStackScreen} />
        <Tab.Screen name="Voucher" component={VoucherStackScreen} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Account" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )

}
