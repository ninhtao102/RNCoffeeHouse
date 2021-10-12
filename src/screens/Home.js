import React from 'react'
import { FlatList, Image, View, Text, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/HomeStyles'

const bannerList = [
    {
        id: 1,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/BANNER-APP.jpg',
        title: 'vui có bạn - tươi trẻ có đôi',
        date: 'Đến 12/10',
    },
    {
        id: 2,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/1200x1200.png',
        title: 'cần món nước ngon, nhà & shoppeepay khao',
        date: 'Đến 11/10',
    },
    {
        id: 3,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-TUNGTANG.jpg',
        title: 'đến hẹn lại lên - xuất chiêu deal hot',
        date: 'Đến 16/10',
    },
    {
        id: 4,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-khoi-dau.jpg',
        title: 'khởi đầu mới - ưu đãi cực hời',
        date: 'Đến 15/10',
    },
    {
        id: 5,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/02.jpg',
        title: 'sản phầm mới: chai fresh - cho ngày dài',
        date: 'Đến 22/10',
    },
    {
        id: 6,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/NEWS-KETNOI-1029x513.jpg',
        title: 'đã lâu không gặp nhà khao 30%',
        date: 'Đến 24/10',
    },
    {
        id: 7,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/h-nh-m--b-n.jpg',
        title: 'the coffee house sắp có phiên bản mới',
        date: 'Đến 30/10',
    },
    {
        id: 8,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/09/APP-NEWS-2-2.jpg',
        title: 'ưu đãi cà phê ngon chỉ từ 19k',
        date: 'Đến 28/10',
    },
]

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* <View>
                    <TouchableHighlight>

                    </TouchableHighlight>
                </View> */}

                <View>
                    <View>
                        <TouchableOpacity>
                            <Text>Giao hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Khám phá thêm </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Text style={styles.btnDiscovery}>Ưu đãi đặc biệt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.btnDiscovery}>Cập nhật từ nhà</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.btnDiscovery}>#CoffeeLover</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </ScrollView>
        </SafeAreaView>
    )
}
