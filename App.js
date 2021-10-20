import React from 'react'
import { View} from 'react-native'
import Booking from './src/screens/Booking'
import Home from './src/screens/Home'
import StoreLocation from './src/screens/StoreLocation'
import Voucher from './src/screens/Voucher'
import Account from './src/screens/Account'
import reactotron from 'reactotron-react-native'
import ProductDetail from './src/screens/ProductDetail'
import StoreLocationDetails from './src/screens/StoreLocationDetails'

export default function App() {

  console.tron.log('aaaaaa')

  return (
    <View>
      {/* <Home/> */}
      {/* <Booking/> */}
      {/* <ProductDetail/> */}
      {/* <StoreLocation/> */}
      <StoreLocationDetails/>
      {/* <Voucher/> */}
      {/* <Account/> */}
    </View>
  )
}
