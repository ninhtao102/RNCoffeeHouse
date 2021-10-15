import React from 'react'
import { View} from 'react-native'
import Booking from './src/screens/Booking'
import Home from './src/screens/Home'
import StoreLocation from './src/screens/StoreLocation'
import Voucher from './src/screens/Voucher'
import reactotron from 'reactotron-react-native'

export default function App() {

  console.tron.log('aaaaaa')

  return (
    <View>
      {/* <Home/> */}
      {/* <Booking/> */}
      {/* <StoreLocation/> */}
      <Voucher/>
    </View>
  )
}
