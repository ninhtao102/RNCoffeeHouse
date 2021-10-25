import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/BookingStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductList from '../components/ProductList'

export default function Booking({navigation}) {

    return (
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{backgroundColor: '#EEE'}}>
                    <View style={[styles.headerBar, {paddingTop: 8}]}>
                        <Image
                            style={styles.icon}
                            source={require('../images/shipping_icon.jpg')}
                        />
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.txtShipping}>Giao đến</Text>
                                <Ionicons name="chevron-down-outline" size={20} color="#000" />
                            </View>
                            <Text 
                            numberOfLines={1}
                            ellipsizeMode= 'tail'
                            style={styles.shipping}
                            >Số 3 ngõ 10, đường Trần Phương, Thôn Song Khê ,Xã Tam Hưng, Huyện Thanh Oai, Hà Nội, Việt Nam</Text>
                        </View>
                    </View>
                    <View style={[styles.headerBar,{paddingBottom: 16}]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Thực đơn"
                        />
                        <View style={styles.searchBar}>
                            <Ionicons name="chevron-down-outline" size={20} color="#000" style={{}} />
                        </View>
                        <TouchableOpacity style={styles.ionIcons}>
                            <Ionicons name="search-outline" size={20} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ionIcons}>
                            <Ionicons name="heart-outline" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.titleContent}>Cà phê</Text>
                    <View>
                        <ProductList/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
