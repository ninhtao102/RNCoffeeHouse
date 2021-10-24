import React from 'react'
import { Dimensions, FlatList, Image, ImageBackground, View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'

import CodeUsers from '../components/CodeUsers'
import styles from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BannerList from '../components/BannerList'
import SwiperBanner from '../components/SwiperBanner'


export default function Home({navigation}) {

    const onBooking = () => navigation.navigate('Booking')
    
    return (
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{backgroundColor: '#EEE'}}>

                    {/* codeUser */}
                    <ImageBackground 
                    source={require('../images/backgroundContent.png')} 
                    style={{backgroundColor: '#e9d8a6',}}
                    resizeMode="repeat" 
                    >

                    <View style={styles.codeUsers}>
                        <CodeUsers/>
                    </View>

                    <View style={styles.content}>

                        {/* swipeBanner and optionBooking */}
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
                            <SwiperBanner/>
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
                    </ImageBackground>

                </View> 
            </ScrollView>
            
        </SafeAreaView>
    )
}
