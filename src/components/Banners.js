import React from 'react'
import { Dimensions, View, Image, StyleSheet } from 'react-native'

import Swiper from 'react-native-swiper';

const WIDTH = Dimensions.get("window").width;

export default function Banners() {
    return (
        <View style={styles.container}>
        <Swiper
          // autoplay = {true}
          // autoplayTimeout = {3}
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: '#EEE',
                width: 25,
                height: 3,
                borderRadius: 4,
                margin: 3,
                
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 28,
                height: 3,
                borderRadius: 4,
                margin: 3,
                
              }}
            />
          }
          paginationStyle={{
            bottom: -16,
          }}
          loop
        >
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../images/banner-1.jpg')}
            />
          </View>

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../images/banner-2.jpg')}
            />
          </View>

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../images/banner-3.jpg')}
            />
          </View>

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../images/banner-4.jpg')}
            />
          </View>

          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../images/banner-5.jpg')}
            />
          </View>
        </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderRadius: 8,
        // shadowColor: "#AAA",
        // shadowOpacity: 0.4,
        // elevation: 8,
    },
    wrapper: {
    },
    image: {
        width: WIDTH*0.92,
        height: WIDTH*0.5,
        borderRadius: 8,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})