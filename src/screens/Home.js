import React from 'react'
import { Image, ImageBackground, View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import styles from '../styles/HomeStyles'

import Ionicons from 'react-native-vector-icons/Ionicons'
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import CodeUsers from '../components/CodeUsers'
import Banners from '../components/Banners'
import BannerList from '../components/BannerList'

export default function Home({navigation}) {
    
    const onBooking = () => navigation.navigate('Booking')

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <ImageBackground 
                source={require('../images/backgroundContent.png')} 
                style={{backgroundColor: '#e9d8a6',}}
                resizeMode="repeat" 
                >
                    <ParallaxScrollView
                        backgroundColor="transparent"
                        contentBackgroundColor="transparent"
                        parallaxHeaderHeight={300}
                        renderForeground={() => (
                            <View 
                            style={{padding: 16}}
                            >
                                <CodeUsers/>
                            </View>
                        )}>
                        <View style={{backgroundColor: '#EEE'}}>
                            <View style={styles.content}>
                                <View style={styles.scroll}></View>
                                <View style={styles.option}>
                                    <TouchableOpacity
                                    onPress={onBooking}
                                    >
                                    <Image
                                        style={styles.icon}
                                        source={require('../images/shipping_icon.jpg')}
                                    />
                                        <Text style={styles.txtOption}>Giao hàng</Text>
                                    </TouchableOpacity>
                                    <View style={styles.line}></View>
                                    <TouchableOpacity>
                                    <Image
                                        style={styles.icon}
                                        source={require('../images/bring_icon.jpg')}
                                    />
                                        <Text style={styles.txtOption}>Mang đi</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Banners/>
                                </View>

                                {/* advertisement */}
                                <Text style={styles.titleDiscovery}>Khám phá thêm </Text>
                                <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    <View style={styles.swipeBtnDiscovery}>
                                        <TouchableOpacity>
                                            <Text style={[styles.btnDiscovery, styles.activeBtnDiscovery]}>Ưu đãi đặc biệt</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.btnDiscovery}>Cập nhật từ nhà</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.btnDiscovery}>#CoffeeLover</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.btnDiscovery}>Quà tặng từ nhà</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>

                                <View>
                                    <BannerList/>
                                </View>
                            </View>

                        </View> 
                    </ParallaxScrollView>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}
