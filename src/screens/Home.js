import React from 'react'
import { FlatList, Image, ImageBackground, View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import styles from '../styles/HomeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
        title: 'cần món nước ngon, shoppee khao',
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
        title: 'the coffee house có phiên bản mới',
        date: 'Đến 30/10',
    },
    {
        id: 8,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/09/APP-NEWS-2-2.jpg',
        title: 'ưu đãi cà phê ngon chỉ từ 19k',
        date: 'Đến 28/10',
    },
]

const renderItem = ({ item }) => (
    <View>
        <TouchableOpacity>
            <Image
            style={styles.banner}
            source={{ uri: item?.photo }}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <View style ={{flexDirection: 'row'}}>
                    <Ionicons name="calendar-outline" size={16} color="#000" />
                    <Text style={styles.date}>{item?.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ImageBackground source={require('../images/backgroundContent.png')} resizeMode="repeat" style={{backgroundColor: '#e9d8a6',}}>
                    <View style={styles.codeUser}>
                        <TouchableOpacity>
                            <ImageBackground source={require('../images/backgroundCodeUser.png')} resizeMode="contain">
                            <View style={styles.addPoint}>
                                <Ionicons name="chevron-down-outline" size={20} color="#FFF" />
                                <Text style={{color: '#FFF'}}>Tích điểm</Text>
                            </View>
                            <Text style={[styles.codeInfo, {fontSize: 18, fontWeight: 'bold',}]}>Ninh Tào</Text>
                            <Text style={[styles.codeInfo,{marginBottom: 24}]}>68 BEAN</Text>
                            <View style={styles.code}>
                                <Image source={require('../images/barcode.gif')} style={styles.barcode} />
                                <Text style={{textAlign: 'center', margin: 10}}>M161514512</Text>
                            </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.option}>
                            <TouchableOpacity>
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
                        <Image
                                style={styles.bannerImage}
                                source={require('../images/BANNER-HOME-APP-CA-PHE-TAI-NHA.jpg')}
                            />
                        <Text style={styles.titleDiscovery}>Khám phá thêm </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Text style={[styles.btnDiscovery, styles.activeBtnDiscovery]}>Ưu đãi đặc biệt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnDiscovery}>Cập nhật từ nhà</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnDiscovery}>#CoffeeLover</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={bannerList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            horizontal={false}
                            style={{ marginBottom: 100 }}
                            columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                        />
                    </View>
                    </ImageBackground>
                </View> 
            </ScrollView>
        </SafeAreaView>
    )
}
